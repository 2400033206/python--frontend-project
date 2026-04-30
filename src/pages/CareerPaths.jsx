import React, { useState, useEffect } from 'react'
import '../styles/Dashboard.css'

export default function CareerPaths() {

  const [careers, setCareers] = useState([])
  const [selectedCareer, setSelectedCareer] = useState(null)

  // 🔥 FORM STATE
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    field: '',
    salary: '',
    description: ''
  })

  // 🔥 FETCH CAREERS
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/careers/")
      .then(res => res.json())
      .then(data => setCareers(data))
  }, [])

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 🔥 ADD CAREER (POST)
  const handleAddCareer = (e) => {
    e.preventDefault()

    fetch("http://127.0.0.1:8000/api/careers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setCareers([...careers, data])
      setShowForm(false)
      setFormData({ title: '', field: '', salary: '', description: '' })
      alert("Career added successfully!")
    })
  }

  return (
    <div className="page-container">

      <h1>🎯 Explore Career Paths</h1>
      <p className="subtitle">Discover opportunities that match your skills and interests</p>

      {/* 🔥 ADD BUTTON */}
      <button 
        className="btn btn-primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "+ Add Career"}
      </button>

      {/* 🔥 FORM */}
      {showForm && (
        <form onSubmit={handleAddCareer} className="section">

          <div className="form-group">
            <label>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Field</label>
            <input name="field" value={formData.field} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input name="salary" value={formData.salary} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Save Career
          </button>
        </form>
      )}

      {/* 🔥 CAREER LIST */}
      <div className="grid">
        {careers.map((career) => (
          <div key={career.id} className="card">

            <h3>{career.title}</h3>
            <p style={{color: '#667eea'}}>{career.field}</p>
            <p><strong>Salary:</strong> {career.salary}</p>
            <p>{career.description}</p>

            <button 
              className="btn btn-primary"
              onClick={() => setSelectedCareer(career)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedCareer && (
        <div className="modal" onClick={() => setSelectedCareer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <h2>{selectedCareer.title}</h2>
            <p>{selectedCareer.description}</p>

            <button onClick={() => setSelectedCareer(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  )
}