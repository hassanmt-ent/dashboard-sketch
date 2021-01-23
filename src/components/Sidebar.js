import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

class Sidebar extends Component {
  render() {
    return (
        <div>
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Tools Pane
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>User Profile</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/current-orders'>
                {/* <i className="nc-icon nc-circle-09"></i> */}
                <p>Current Orders</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/past-orders'>
                {/* <i className="nc-icon nc-circle-09"></i> */}
                <p>Past Orders</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/past-orders'>
                {/* <i className="nc-icon nc-circle-09"></i> */}
                <p>Graphical Analysis</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
      </div>
    )
  }
}

const SideColor = styled.div`
background-color: navy`

export default Sidebar