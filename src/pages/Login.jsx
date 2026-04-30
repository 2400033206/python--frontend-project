import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Login.css'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    // Mock authentication
    const user = {
      id: Math.random(),
      name: email.split('@')[0],
      email: email,
      role: role
    }

    onLogin(user, role)
    navigate(role === 'admin' ? '/admin/dashboard' : '/user/dashboard')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🎓 Career Guidance Platform</h1>
        <p className="subtitle">Your path to success starts here</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">Student/User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <div className="alert alert-error">{error}</div>}

          <button type="submit" className="btn btn-primary login-btn">
            Login
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: '#667eea', fontWeight: 'bold', textDecoration: 'none' }}>
              Sign up here
            </Link>
          </p>
        </div>

        <div className="demo-info">
          <p><strong>Demo Credentials:</strong></p>
          <p>📧 Email: any email</p>
          <p>🔑 Password: any password</p>
          <p>(This is a demo platform)</p>
        </div>
      </div>
    </div>
  )
}
