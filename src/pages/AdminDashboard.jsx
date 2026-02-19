import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'

export default function AdminDashboard({ user }) {
  const navigate = useNavigate()
  const [stats] = useState({
    totalUsers: 245,
    activeSessions: 18,
    totalResources: 156,
    totalCounsellors: 12,
    completedSessions: 823,
    userSatisfaction: 4.6
  })

  return (
    <div className="page-container">
      <h1>🎓 Admin Dashboard</h1>
      <p className="subtitle">Manage career guidance platform operations</p>

      {/* Quick Actions */}
      <section className="section">
        <h2>Quick Actions</h2>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => navigate('/admin/resources')}>
            📚 Manage Resources
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/admin/counsellors')}>
            👥 Manage Counsellors
          </button>
          <button className="btn btn-secondary">
            👤 Manage Users
          </button>
          <button className="btn btn-secondary">
            📊 View Analytics
          </button>
          <button className="btn btn-secondary">
            📧 Send Messages
          </button>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="section">
        <h2>📊 Platform Statistics</h2>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>👥 Total Users</h3>
            <div className="dashboard-card-value">{stats.totalUsers}</div>
            <p>Active on platform</p>
            <button className="btn btn-small" onClick={() => navigate('/admin/resources')}>
              View →
            </button>
          </div>

          <div className="dashboard-card">
            <h3>🎯 Active Sessions</h3>
            <div className="dashboard-card-value">{stats.activeSessions}</div>
            <p>Currently ongoing</p>
            <button className="btn btn-small">
              Monitor →
            </button>
          </div>

          <div className="dashboard-card">
            <h3>📚 Resources</h3>
            <div className="dashboard-card-value">{stats.totalResources}</div>
            <p>Career resources available</p>
            <button className="btn btn-small" onClick={() => navigate('/admin/resources')}>
              Manage →
            </button>
          </div>

          <div className="dashboard-card">
            <h3>👨‍🏫 Counsellors</h3>
            <div className="dashboard-card-value">{stats.totalCounsellors}</div>
            <p>Active counsellors</p>
            <button className="btn btn-small" onClick={() => navigate('/admin/counsellors')}>
              Manage →
            </button>
          </div>

          <div className="dashboard-card">
            <h3>✓ Completed Sessions</h3>
            <div className="dashboard-card-value">{stats.completedSessions}</div>
            <p>All-time sessions</p>
            <button className="btn btn-small">
              Review →
            </button>
          </div>

          <div className="dashboard-card">
            <h3>⭐ Satisfaction Rate</h3>
            <div className="dashboard-card-value">{stats.userSatisfaction}</div>
            <p>User satisfaction score</p>
            <button className="btn btn-small">
              Details →
            </button>
          </div>
        </div>
      </section>

      {/* Recent User Activity */}
      <section className="section">
        <h2>📋 Recent Activity</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Booked counseling session</td>
                <td>Today 2:45 PM</td>
                <td><span className="status status-confirmed">Confirmed</span></td>
              </tr>
              <tr>
                <td>Sarah Smith</td>
                <td>Completed career assessment</td>
                <td>Today 1:30 PM</td>
                <td><span className="status status-confirmed">Completed</span></td>
              </tr>
              <tr>
                <td>Mike Johnson</td>
                <td>Viewed career resources</td>
                <td>Today 12:15 PM</td>
                <td><span className="status status-confirmed">Viewed</span></td>
              </tr>
              <tr>
                <td>Emily Brown</td>
                <td>Canceled session</td>
                <td>Today 11:00 AM</td>
                <td><span className="status status-cancelled">Cancelled</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary">View All Activities</button>
      </section>

      {/* Platform Health */}
      <section className="section">
        <h2>🏥 Platform Health</h2>
        <div className="grid">
          <div className="card">
            <h3>✓ Server Status</h3>
            <p><strong>Status:</strong> <span style={{color: '#51cf66'}}>🟢 Operational</span></p>
            <p><strong>Uptime:</strong> 99.9%</p>
            <p><strong>Response Time:</strong> 45ms</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              View Details
            </button>
          </div>

          <div className="card">
            <h3>🔒 Security</h3>
            <p><strong>Status:</strong> <span style={{color: '#51cf66'}}>🟢 Secure</span></p>
            <p><strong>SSL Certificate:</strong> Valid</p>
            <p><strong>Last Scan:</strong> Today</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              Security Report
            </button>
          </div>

          <div className="card">
            <h3>💾 Storage</h3>
            <p><strong>Used:</strong> 45%</p>
            <p><strong>Available:</strong> 55%</p>
            <p><strong>Total Capacity:</strong> 1TB</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              Manage Storage
            </button>
          </div>

          <div className="card">
            <h3>📊 Database</h3>
            <p><strong>Status:</strong> <span style={{color: '#51cf66'}}>🟢 Healthy</span></p>
            <p><strong>Size:</strong> 250GB</p>
            <p><strong>Last Backup:</strong> Today 12:00 AM</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              Database Admin
            </button>
          </div>
        </div>
      </section>

      {/* Management Options */}
      <section className="section">
        <h2>⚙️ Management Tools</h2>
        <div className="grid">
          <div className="card">
            <h3>📚 Career Resources</h3>
            <p>Add, edit, or delete career guidance resources and materials.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/admin/resources')}
              style={{marginTop: '1rem', width: '100%'}}
            >
              Manage Resources
            </button>
          </div>

          <div className="card">
            <h3>👥 Counsellor Management</h3>
            <p>Manage counsellor profiles, availability, and specializations.</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/admin/counsellors')}
              style={{marginTop: '1rem', width: '100%'}}
            >
              Manage Counsellors
            </button>
          </div>

          <div className="card">
            <h3>👤 User Management</h3>
            <p>View and manage user accounts, permissions, and access.</p>
            <button 
              className="btn btn-primary"
              style={{marginTop: '1rem', width: '100%'}}
            >
              Manage Users
            </button>
          </div>

          <div className="card">
            <h3>📊 Engagement Reports</h3>
            <p>Track user engagement metrics and platform statistics.</p>
            <button 
              className="btn btn-primary"
              style={{marginTop: '1rem', width: '100%'}}
            >
              View Reports
            </button>
          </div>

          <div className="card">
            <h3>📧 Communications</h3>
            <p>Send announcements, notifications, and messages to users.</p>
            <button 
              className="btn btn-primary"
              style={{marginTop: '1rem', width: '100%'}}
            >
              Send Message
            </button>
          </div>

          <div className="card">
            <h3>⚙️ System Settings</h3>
            <p>Configure platform-wide settings and preferences.</p>
            <button 
              className="btn btn-primary"
              style={{marginTop: '1rem', width: '100%'}}
            >
              System Settings
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
