import React from "react"
import { Link } from "gatsby"
import "papercss"

function Nav() {
  return (
  <nav className="border fixed split-nav" style={{ backgroundColor: "#FFFFFF80" }}>
    <div className="nav-brand">
      <h3><Link to="/">NJU-China 2022</Link></h3>
    </div>
    <ul className="inline">
      <li className="dropdown">
        <div className="dropdown-title">Project</div>
        <ul className="dropdown-menu border border-4">
          <li><Link to="/project/description/">Description</Link></li>
        </ul>
      </li>
      <li className="dropdown">
        <div className="dropdown-title">Human Practices</div>
        <ul className="dropdown-menu border border-4">
          <li><Link to="/human-practices/overview/">Overview</Link></li>
          <li><Link to="/human-practices/collaboration/">Collaboration</Link></li>
          <li><Link to="/human-practices/partnership/">Partnership</Link></li>
          <li><Link to="/human-practices/education-communication/">Education & Communication</Link></li>
          <li><Link to="/human-practices/integrated-hp/">Integrated HP</Link></li>
        </ul>
      </li>
      <li className="dropdown">
        <div className="dropdown-title">Notebook</div>
        <ul className="dropdown-menu border border-4">
          <li><Link to="/project/description/">Description</Link></li>
        </ul>
      </li>
      <li className="dropdown">
        <div className="dropdown-title">Team</div>
        <ul className="dropdown-menu border border-4">
          <li><Link to="/project/description/">Description</Link></li>
        </ul>
      </li>
      <li><Link to="/">Achievements</Link></li>
      <li><Link to="/">Parts</Link></li>
    </ul>
  </nav>
  )
}

export default Nav