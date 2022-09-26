import React from "react"
import "papercss"

function Nav() {
  return (
  <nav className="border fixed split-nav">
    <div className="nav-brand">
      <h3><a href="#">NJU-China 2022</a></h3>
    </div>
    <ul className="inline">
      <li className="dropdown">
        <div className="dropdown-title">Project</div>
        <ul className="dropdown-menu border border-4">
          <li><a href="#">Github</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <div className="dropdown-title">Human Practices</div>
        <ul className="dropdown-menu border border-4">
          <li><a href="#">Github</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <div className="dropdown-title">Notebook</div>
        <ul className="dropdown-menu border border-4">
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Protocol</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <div className="dropdown-title">Team</div>
        <ul className="dropdown-menu border border-4">
          <li><a href="#">Github</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
      <li><a href="#">Achievements</a></li>
      <li><a href="#">Parts</a></li>
    </ul>
  </nav>
  )
}

export default Nav