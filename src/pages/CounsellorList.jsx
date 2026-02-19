import React, { useState } from 'react'
import '../styles/Dashboard.css'

export default function CounsellorList() {
  const [counsellors, setCounsellors] = useState([
    {
      id: 1,
      name: 'Dr. John Smith',
      specialization: 'Tech & Engineering',
      experience: '15 years',
      rating: 4.8,
      availability: 'Available',
      image: '👨‍⚕️',
      bio: 'Specializes in tech career guidance with industry experience.'
    },
    {
      id: 2,
      name: 'Ms. Sarah Johnson',
      specialization: 'Business & Management',
      experience: '12 years',
      rating: 4.7,
      availability: 'Available',
      image: '👩‍⚕️',
      bio: 'Expert in business careers and management paths.'
    },
    {
      id: 3,
      name: 'Mr. Michael Chen',
      specialization: 'Entrepreneurship',
      experience: '10 years',
      rating: 4.9,
      availability: 'Available',
      image: '👨‍⚕️',
      bio: 'Guides students through startup and entrepreneurial ventures.'
    },
    {
      id: 4,
      name: 'Dr. Emily Watson',
      specialization: 'Healthcare & Medicine',
      experience: '18 years',
      rating: 4.6,
      availability: 'Limited',
      image: '👩‍⚕️',
      bio: 'Medical career counselor with extensive healthcare knowledge.'
    },
    {
      id: 5,
      name: 'Prof. David Martinez',
      specialization: 'Arts & Design',
      experience: '14 years',
      rating: 4.5,
      availability: 'Available',
      image: '👨‍⚕️',
      bio: 'Creative industry specialist and design career mentor.'
    },
    {
      id: 6,
      name: 'Ms. Lisa Anderson',
      specialization: 'Finance & Economics',
      experience: '13 years',
      rating: 4.7,
      availability: 'Available',
      image: '👩‍⚕️',
      bio: 'Financial sector expert helping students explore finance careers.'
    }
  ])

  const [selectedCounsellor, setSelectedCounsellor] = useState(null)
  const [filter, setFilter] = useState('All')
  const [bookingModal, setBookingModal] = useState(false)

  const specializations = ['All', 'Tech & Engineering', 'Business & Management', 'Entrepreneurship', 'Healthcare & Medicine', 'Arts & Design', 'Finance & Economics']
  const filtered = filter === 'All' ? counsellors : counsellors.filter(c => c.specialization === filter)

  return (
    <div className="page-container">
      <h1>👨‍💼 Find Career Counsellors</h1>
      <p className="subtitle">Connect with experienced career guidance professionals</p>

      {/* Filter Section */}
      <section className="section">
        <h2>Filter by Specialization</h2>
        <div className="button-group">
          {specializations.map((spec) => (
            <button
              key={spec}
              className={`btn ${filter === spec ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter(spec)}
            >
              {spec}
            </button>
          ))}
        </div>
      </section>

      {/* Counsellors Grid */}
      <div className="grid">
        {filtered.map((counsellor) => (
          <div key={counsellor.id} className="card">
            <div style={{fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center'}}>{counsellor.image}</div>
            <h3>{counsellor.name}</h3>
            <p style={{color: '#667eea', fontWeight: 'bold'}}>{counsellor.specialization}</p>
            
            <div style={{marginBottom: '1rem'}}>
              <p><strong>Experience:</strong> {counsellor.experience}</p>
              <p><strong>Rating:</strong> ⭐ {counsellor.rating}/5.0</p>
              <p>
                <strong>Status:</strong> 
                <span style={{
                  marginLeft: '0.5rem',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  background: counsellor.availability === 'Available' ? '#d4edda' : '#fff3cd',
                  color: counsellor.availability === 'Available' ? '#155724' : '#856404'
                }}>
                  {counsellor.availability}
                </span>
              </p>
            </div>

            <p className="card-description">{counsellor.bio}</p>

            <div className="button-group">
              <button 
                className="btn btn-primary" 
                onClick={() => setSelectedCounsellor(counsellor)}
              >
                View Profile
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedCounsellor(counsellor)
                  setBookingModal(true)
                }}
              >
                📅 Book Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Counsellor Profile Modal */}
      {selectedCounsellor && !bookingModal && (
        <div className="modal" onClick={() => setSelectedCounsellor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedCounsellor.image} {selectedCounsellor.name}</h2>
              <button className="close-btn" onClick={() => setSelectedCounsellor(null)}>×</button>
            </div>

            <div className="modal-body">
              <h3>Specialization</h3>
              <p>{selectedCounsellor.specialization}</p>

              <h3 style={{marginTop: '1rem'}}>About</h3>
              <p>{selectedCounsellor.bio}</p>

              <h3 style={{marginTop: '1rem'}}>Experience</h3>
              <p>{selectedCounsellor.experience} in career counseling</p>

              <h3 style={{marginTop: '1rem'}}>Rating</h3>
              <p>⭐ {selectedCounsellor.rating}/5.0 (Based on student reviews)</p>

              <h3 style={{marginTop: '1rem'}}>Availability</h3>
              <p>{selectedCounsellor.availability}</p>

              <div className="button-group" style={{marginTop: '1.5rem'}}>
                <button 
                  className="btn btn-primary"
                  onClick={() => setBookingModal(true)}
                >
                  📅 Schedule Session
                </button>
                <button className="btn btn-secondary" onClick={() => setSelectedCounsellor(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {bookingModal && selectedCounsellor && (
        <div className="modal" onClick={() => { setBookingModal(false); setSelectedCounsellor(null); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📅 Book Session - {selectedCounsellor.name}</h2>
              <button className="close-btn" onClick={() => { setBookingModal(false); setSelectedCounsellor(null); }}>×</button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Preferred Time</label>
                <select>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>

              <div className="form-group">
                <label>Session Type</label>
                <select>
                  <option>One-on-One (30 min) - $25</option>
                  <option>One-on-One (60 min) - $45</option>
                  <option>Group Session (90 min) - $15</option>
                </select>
              </div>

              <div className="form-group">
                <label>Topic of Discussion</label>
                <textarea placeholder="Tell us what you'd like to discuss..." rows="4"></textarea>
              </div>

              <div className="button-group">
                <button className="btn btn-primary">Confirm Booking</button>
                <button className="btn btn-secondary" onClick={() => { setBookingModal(false); setSelectedCounsellor(null); }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
