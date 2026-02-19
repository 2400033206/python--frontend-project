import React, { useState } from 'react'
import '../styles/Dashboard.css'

export default function BookSession({ user }) {
  const [formData, setFormData] = useState({
    counsellor: '',
    date: '',
    time: '',
    sessionType: 'one-on-one-30',
    topic: '',
    notes: ''
  })

  const [bookings, setBookings] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const counsellors = [
    'Dr. John Smith',
    'Ms. Sarah Johnson',
    'Mr. Michael Chen',
    'Dr. Emily Watson',
    'Prof. David Martinez',
    'Ms. Lisa Anderson'
  ]

  const sessionTypes = [
    { id: 'one-on-one-30', label: 'One-on-One (30 min) - $25' },
    { id: 'one-on-one-60', label: 'One-on-One (60 min) - $45' },
    { id: 'group-90', label: 'Group Session (90 min) - $15' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.counsellor || !formData.date || !formData.time || !formData.topic) {
      alert('Please fill in all required fields')
      return
    }

    const newBooking = {
      id: bookings.length + 1,
      ...formData,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString()
    }

    setBookings([...bookings, newBooking])
    setSuccessMessage(`Session booked successfully with ${formData.counsellor}!`)
    setFormData({
      counsellor: '',
      date: '',
      time: '',
      sessionType: 'one-on-one-30',
      topic: '',
      notes: ''
    })
    setShowForm(false)

    setTimeout(() => setSuccessMessage(''), 5000)
  }

  const handleCancelBooking = (id) => {
    setBookings(bookings.filter(b => b.id !== id))
  }

  return (
    <div className="page-container">
      <h1>📅 Book Counseling Session</h1>
      <p className="subtitle">Schedule your one-on-one sessions with expert counsellors</p>

      {/* Success Message */}
      {successMessage && (
        <section className="section">
          <div className="alert alert-success">✓ {successMessage}</div>
        </section>
      )}

      {/* Quick Actions */}
      <section className="section">
        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '✕ Cancel' : '+ Book New Session'}
          </button>
        </div>
      </section>

      {/* Booking Form */}
      {showForm && (
        <section className="section">
          <h2>Schedule Your Session</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Counsellor *</label>
              <select 
                name="counsellor" 
                value={formData.counsellor} 
                onChange={handleChange}
                required
              >
                <option value="">-- Select a Counsellor --</option>
                {counsellors.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div className="form-group">
                <label>Preferred Date *</label>
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preferred Time *</label>
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Time --</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Session Type *</label>
              <select 
                name="sessionType" 
                value={formData.sessionType} 
                onChange={handleChange}
                required
              >
                {sessionTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Topic of Discussion *</label>
              <select 
                name="topic" 
                value={formData.topic} 
                onChange={handleChange}
                required
              >
                <option value="">-- Select Topic --</option>
                <option value="career-exploration">Career Exploration</option>
                <option value="skill-development">Skill Development</option>
                <option value="job-search">Job Search Strategy</option>
                <option value="interview-prep">Interview Preparation</option>
                <option value="career-transition">Career Transition</option>
                <option value="personal-development">Personal Development</option>
              </select>
            </div>

            <div className="form-group">
              <label>Additional Notes</label>
              <textarea 
                name="notes" 
                value={formData.notes} 
                onChange={handleChange}
                placeholder="Any additional information you'd like to share..."
                rows="4"
              ></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                ✓ Confirm Booking
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Existing Bookings */}
      <section className="section">
        <h2>📋 Your Bookings ({bookings.length})</h2>
        
        {bookings.length === 0 ? (
          <div className="card">
            <p>No bookings yet. Click "Book New Session" to schedule your first session!</p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Counsellor</th>
                    <th>Date & Time</th>
                    <th>Topic</th>
                    <th>Session Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.counsellor}</td>
                      <td>{booking.date} at {booking.time}</td>
                      <td>{booking.topic}</td>
                      <td>
                        {sessionTypes.find(st => st.id === booking.sessionType)?.label}
                      </td>
                      <td>
                        <span className={`status status-${booking.status.toLowerCase()}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn btn-small"
                          onClick={() => handleCancelBooking(booking.id)}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              + Book Another Session
            </button>
          </>
        )}
      </section>

      {/* Information Section */}
      <section className="section">
        <h2>ℹ️ Booking Information</h2>
        <div className="grid">
          <div className="card">
            <h3>📌 How It Works</h3>
            <ol>
              <li>Select a counsellor from our expert team</li>
              <li>Choose your preferred date and time</li>
              <li>Select the session duration</li>
              <li>Provide the topic you want to discuss</li>
              <li>Receive confirmation via email</li>
            </ol>
          </div>

          <div className="card">
            <h3>💬 Session Topics</h3>
            <ul>
              <li>Career Exploration & Discovery</li>
              <li>Skill Development & Training</li>
              <li>Job Search Strategies</li>
              <li>Interview Preparation</li>
              <li>Career Transition Guidance</li>
              <li>Personal & Professional Growth</li>
            </ul>
          </div>

          <div className="card">
            <h3>💳 Pricing</h3>
            <ul>
              <li>One-on-One (30 min): $25</li>
              <li>One-on-One (60 min): $45</li>
              <li>Group Session (90 min): $15</li>
            </ul>
            <button className="btn btn-primary" style={{marginTop: '1rem', width: '100%'}}>
              💳 View Payment Options
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
