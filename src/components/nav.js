import React from "react"
import "papercss"

export default () => (
  <nav className="border fixed split-nav">
    <div className="nav-brand">
      <h3><a href="#">NJU-China 2022</a></h3>
    </div>
    <ul class="inline">
      <li class="dropdown">
        <div class="dropdown-title">Project</div>
        <ul class="dropdown-menu border border-4">
          <li><a href="#">Github</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <div class="dropdown-title">Human Practices</div>
        <ul class="dropdown-menu border border-4">
          <li><a href="#">Github</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <div class="dropdown-title">Notebook</div>
        <ul class="dropdown-menu border border-4">
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Protocol</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <div class="dropdown-title">Team</div>
        <ul class="dropdown-menu border border-4">
          <li><a href="#">Github</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>
      <li><a href="#">Achievements</a></li>
      <li><a href="#">Parts</a></li>
    </ul>
  </nav>
)