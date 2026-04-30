import React, { useState, useEffect } from 'react'
import '../styles/Dashboard.css'

export default function BookSession() {

  const [counsellors, setCounsellors] = useState([])

  const [formData, setFormData] = useState({
    user_name: '',
    counsellor: '',
    date: '',
    time: '',
    topic: ''
  })

  const [successMessage, setSuccessMessage] = useState('')

  // 🔥 FETCH COUNSELLORS
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/counsellors/")
      .then(res => res.json())
      .then(data => setCounsellors(data))
  }, [])

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 🔥 BOOK SESSION (POST)
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://127.0.0.1:8000/api/bookings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: formData.user_name,
        counsellor: parseInt(formData.counsellor),
        date: formData.date,
        time: formData.time,
        topic: formData.topic
      })
    })
    .then(res => res.json())
    .then(data => {
      setSuccessMessage("Booking successful!")
      setFormData({
        user_name: '',
        counsellor: '',
        date: '',
        time: '',
        topic: ''
      })
      setTimeout(() => setSuccessMessage(''), 3000)
    })
  }

  return (
    <div className="page-container">

      <h1>📅 Book a Session</h1>
      <p className="subtitle">Schedule a session with a career counsellor</p>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <section className="section">
        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="form-group">
            <label>Your Name</label>
            <input
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* COUNSELLOR */}
          <div className="form-group">
            <label>Select Counsellor</label>
            <select
              name="counsellor"
              value={formData.counsellor}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {counsellors.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.specialization})
                </option>
              ))}
            </select>
          </div>

          {/* DATE */}
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* TIME */}
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* TOPIC */}
          <div className="form-group">
            <label>Topic</label>
            <textarea
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="What do you want to discuss?"
              rows="3"
            />
          </div>

          {/* BUTTON */}
          <button className="btn btn-primary" type="submit">
            Book Session
          </button>

        </form>
      </section>

    </div>
  )
}