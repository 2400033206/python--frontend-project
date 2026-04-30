import React, { useState, useEffect } from 'react'
import '../styles/Dashboard.css'

export default function AdminCounsellors() {

  const [counsellors, setCounsellors] = useState([])
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    experience: '',
  })

  const [successMessage, setSuccessMessage] = useState('')

  const specializations = [
    'Tech & Engineering',
    'Business & Management',
    'Entrepreneurship',
    'Healthcare & Medicine',
    'Arts & Design',
    'Finance & Economics'
  ]

  // ✅ FETCH DATA
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/counsellors/")
      .then(res => res.json())
      .then(data => setCounsellors(data))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // ✅ ADD COUNSELLOR
  const handleAddCounsellor = (e) => {
    e.preventDefault()

    fetch("http://127.0.0.1:8000/api/counsellors/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        specialization: formData.specialization,
        experience: parseInt(formData.experience),
        rating: 4.5
      })
    })
    .then(res => res.json())
    .then(data => {
      setCounsellors([...counsellors, data])
      setSuccessMessage("Counsellor added successfully!")
      setShowForm(false)
      setFormData({ name: '', specialization: '', experience: '' })
      setTimeout(() => setSuccessMessage(''), 3000)
    })
  }

  // ✅ DELETE COUNSELLOR
  const handleDeleteCounsellor = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`http://127.0.0.1:8000/api/counsellors/${id}/`, {
        method: "DELETE"
      })
      .then(() => {
        setCounsellors(counsellors.filter(c => c.id !== id))
        setSuccessMessage("Deleted successfully!")
        setTimeout(() => setSuccessMessage(''), 3000)
      })
    }
  }

  return (
    <div className="page-container">

      <h1>👥 Manage Counsellors</h1>
      <p className="subtitle">Manage all counsellors in your system</p>

      {successMessage && (
        <section className="section">
          <div className="alert alert-success">{successMessage}</div>
        </section>
      )}

      {/* ADD BUTTON */}
      <section className="section">
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "+ Add Counsellor"}
        </button>
      </section>

      {/* FORM */}
      {showForm && (
        <section className="section">
          <h2>Add Counsellor</h2>

          <form onSubmit={handleAddCounsellor}>

            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label>Specialization</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {specializations.map(spec => (
                  <option key={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Experience (years)</label>
              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 5"
              />
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                Save
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

      {/* TABLE */}
      <section className="section">
        <h2>Counsellors ({counsellors.length})</h2>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {counsellors.map(c => (
                <tr key={c.id}>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.specialization}</td>
                  <td>{c.experience}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteCounsellor(c.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>

    </div>
  )
}