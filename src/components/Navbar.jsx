import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar({ user, role, onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🎓 Career Guidance Platform</Link>
      </div>
      <div className="navbar-links">
        {role === 'admin' ? (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/resources">Manage Resources</Link>
            <Link to="/admin/counsellors">Manage Counsellors</Link>
          </>
        ) : (
          <>
            <Link to="/user/dashboard">Dashboard</Link>
            <Link to="/user/career-paths">Career Paths</Link>
            <Link to="/user/counsellors">Find Counsellors</Link>
            <Link to="/user/book-session">Book Session</Link>
            <Link to="/user/profile">Profile</Link>
          </>
        )}
        <span>Welcome, {user?.name}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
