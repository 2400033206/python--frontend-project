import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Login.css'

export default function SignUp({ onLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    university: '',
    role: 'user'
  })

  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    // Create user object
    const newUser = {
      id: Math.random(),
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      university: formData.university,
      role: formData.role,
      skills: [],
      interests: [],
      bio: ''
    }

    // Show success message
    setSuccessMessage('Account created successfully! Redirecting to login...')
    
    // Redirect to login after delay
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🎓 Create Account</h1>
        <p className="subtitle">Join our career guidance platform</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>University/College</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="Enter your university/college"
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-group">
            <label>I am a:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="user">Student/User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {error && <div className="alert alert-error">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <button type="submit" className="btn btn-primary login-btn">
            Create Account
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#667eea', fontWeight: 'bold', textDecoration: 'none' }}>
              Login here
            </Link>
          </p>
        </div>

        <div className="demo-info">
          <p><strong>No Login Required!</strong></p>
          <p>✓ Signup or just use any email/password to login</p>
          <p>(This is a demo platform)</p>
        </div>
      </div>
    </div>
  )
}
