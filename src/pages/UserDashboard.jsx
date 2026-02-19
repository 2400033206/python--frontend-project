import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'

export default function UserDashboard({ user }) {
  const navigate = useNavigate()
  const [bookings, setBookings] = useState([
    { id: 1, counsellor: 'Dr. John Smith', date: '2024-02-28', status: 'Confirmed' },
    { id: 2, counsellor: 'Ms. Sarah Johnson', date: '2024-03-05', status: 'Pending' }
  ])

  const [savedCareerPaths, setSavedCareerPaths] = useState([
    { id: 1, title: 'Software Engineer', field: 'Tech', matches: '85%' },
    { id: 2, title: 'Data Scientist', field: 'Tech', matches: '92%' }
  ])

  return (
    <div className="page-container">
      <h1>👋 Welcome, {user?.name}!</h1>
      <p className="subtitle">Your Career Guidance Dashboard</p>

      {/* Quick Actions */}
      <section className="section">
        <h2>Quick Actions</h2>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => navigate('/user/career-paths')}>
            🎯 Explore Career Paths
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/user/counsellors')}>
            👨‍💼 Find Counsellors
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/user/book-session')}>
            📅 Book Session
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/user/profile')}>
            👤 My Profile
          </button>
        </div>
      </section>

      {/* Dashboard Cards */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📊 Your Statistics</h3>
          <div className="dashboard-card-value">7</div>
          <p>Sessions Completed</p>
          <button className="btn btn-small" onClick={() => navigate('/user/profile')}>
            View Details →
          </button>
        </div>

        <div className="dashboard-card">
          <h3>🗓️ Upcoming Sessions</h3>
          <div className="dashboard-card-value">{bookings.length}</div>
          <p>Scheduled Appointments</p>
          <button className="btn btn-small" onClick={() => navigate('/user/book-session')}>
            Manage Sessions →
          </button>
        </div>

        <div className="dashboard-card">
          <h3>❤️ Saved Careers</h3>
          <div className="dashboard-card-value">{savedCareerPaths.length}</div>
          <p>Favorite Career Paths</p>
          <button className="btn btn-small" onClick={() => navigate('/user/career-paths')}>
            Browse More →
          </button>
        </div>

        <div className="dashboard-card">
          <h3>🌟 Progress</h3>
          <div className="dashboard-card-value">75%</div>
          <p>Profile Completion</p>
          <button className="btn btn-small" onClick={() => navigate('/user/profile')}>
            Complete Profile →
          </button>
        </div>
      </div>

      {/* Recent Bookings */}
      <section className="section">
        <h2>📋 Your Upcoming Sessions</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Counsellor</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.counsellor}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={`status status-${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-small" onClick={() => navigate('/user/book-session')}>
                      Reschedule
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/user/book-session')}>
          + Book New Session
        </button>
      </section>

      {/* Saved Career Paths */}
      <section className="section">
        <h2>💼 Your Saved Career Paths</h2>
        <div className="grid">
          {savedCareerPaths.map((career) => (
            <div key={career.id} className="card">
              <h3>{career.title}</h3>
              <p>Field: {career.field}</p>
              <p className="match-score">Match Score: {career.matches}</p>
              <div className="button-group">
                <button className="btn btn-primary" onClick={() => navigate('/user/career-paths')}>
                  View Details
                </button>
                <button className="btn btn-secondary" onClick={() => {
                  setSavedCareerPaths(savedCareerPaths.filter(c => c.id !== career.id))
                }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/user/career-paths')}>
          + Explore More Careers
        </button>
      </section>

      {/* Recommendations */}
      <section className="section">
        <h2>⭐ Personalized Recommendations</h2>
        <div className="card">
          <h3>Based on Your Profile</h3>
          <p>We recommend the following careers that match your skills and interests:</p>
          <ul>
            <li>✓ Web Development (Match: 88%)</li>
            <li>✓ Cloud Architecture (Match: 85%)</li>
            <li>✓ AI/Machine Learning (Match: 82%)</li>
          </ul>
          <button className="btn btn-primary" onClick={() => navigate('/user/career-paths')}>
            Explore Recommendations
          </button>
        </div>
      </section>
    </div>
  )
}
