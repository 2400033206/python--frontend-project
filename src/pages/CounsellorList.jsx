import React, { useState, useEffect } from 'react'
import '../styles/Dashboard.css'

export default function CounsellorList() {

  // 🔥 API DATA
  const [counsellors, setCounsellors] = useState([])

  const [selectedCounsellor, setSelectedCounsellor] = useState(null)
  const [filter, setFilter] = useState('All')
  const [bookingModal, setBookingModal] = useState(false)

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/counsellors/")
      .then(res => res.json())
      .then(data => setCounsellors(data))
      .catch(err => console.log(err))
  }, [])

  const specializations = ['All']
  const filtered = counsellors   // backend handles real data

  return (
    <div className="page-container">
      <h1>👨‍💼 Find Career Counsellors</h1>
      <p className="subtitle">Connect with experienced career guidance professionals</p>

      {/* Counsellors Grid */}
      <div className="grid">
        {filtered.map((counsellor) => (
          <div key={counsellor.id} className="card">
            <div style={{fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center'}}>👨‍⚕️</div>
            
            <h3>{counsellor.name}</h3>
            <p style={{color: '#667eea', fontWeight: 'bold'}}>
              {counsellor.specialization}
            </p>
            
            <div style={{marginBottom: '1rem'}}>
              <p><strong>Experience:</strong> {counsellor.experience} years</p>
              <p><strong>Rating:</strong> ⭐ {counsellor.rating}</p>
            </div>

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

      {/* Profile Modal */}
      {selectedCounsellor && !bookingModal && (
        <div className="modal" onClick={() => setSelectedCounsellor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedCounsellor.name}</h2>
              <button className="close-btn" onClick={() => setSelectedCounsellor(null)}>×</button>
            </div>

            <div className="modal-body">
              <p><strong>Specialization:</strong> {selectedCounsellor.specialization}</p>
              <p><strong>Experience:</strong> {selectedCounsellor.experience} years</p>
              <p><strong>Rating:</strong> ⭐ {selectedCounsellor.rating}</p>

              <div className="button-group">
                <button 
                  className="btn btn-primary"
                  onClick={() => setBookingModal(true)}
                >
                  📅 Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING */}
      {bookingModal && selectedCounsellor && (
        <div className="modal" onClick={() => setBookingModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Book - {selectedCounsellor.name}</h2>
            </div>

            <div className="modal-body">
              <button
                className="btn btn-primary"
                onClick={() => {
                  fetch("http://127.0.0.1:8000/api/bookings/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      user_name: "Akshitha",
                      counsellor: selectedCounsellor.id,
                      date: "2026-05-01",
                      time: "10:00",
                      topic: "Career Guidance"
                    })
                  })
                  .then(res => res.json())
                  .then(() => {
                    alert("Booking successful!")
                    setBookingModal(false)
                  })
                }}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}