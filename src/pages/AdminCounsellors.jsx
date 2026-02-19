import React, { useState } from 'react'
import '../styles/Dashboard.css'

export default function AdminCounsellors() {
  const [counsellors, setCounsellors] = useState([
    { id: 1, name: 'Dr. John Smith', specialization: 'Tech & Engineering', experience: '15 years', status: 'Active' },
    { id: 2, name: 'Ms. Sarah Johnson', specialization: 'Business & Management', experience: '12 years', status: 'Active' },
    { id: 3, name: 'Mr. Michael Chen', specialization: 'Entrepreneurship', experience: '10 years', status: 'Active' },
    { id: 4, name: 'Dr. Emily Watson', specialization: 'Healthcare & Medicine', experience: '18 years', status: 'Inactive' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    experience: '',
    bio: '',
    email: ''
  })

  const [editingId, setEditingId] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')

  const specializations = ['Tech & Engineering', 'Business & Management', 'Entrepreneurship', 'Healthcare & Medicine', 'Arts & Design', 'Finance & Economics']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddCounsellor = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.specialization || !formData.experience) {
      alert('Please fill in all required fields')
      return
    }

    if (editingId) {
      setCounsellors(counsellors.map(c => c.id === editingId ? { ...formData, id: editingId, status: 'Active' } : c))
      setEditingId(null)
    } else {
      setCounsellors([...counsellors, { ...formData, id: Date.now(), status: 'Active' }])
    }

    setFormData({ name: '', specialization: '', experience: '', bio: '', email: '' })
    setShowForm(false)
    setSuccessMessage(`Counsellor ${editingId ? 'updated' : 'added'} successfully!`)
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleEditCounsellor = (counsellor) => {
    setFormData(counsellor)
    setEditingId(counsellor.id)
    setShowForm(true)
  }

  const handleDeleteCounsellor = (id) => {
    if (confirm('Are you sure you want to remove this counsellor?')) {
      setCounsellors(counsellors.filter(c => c.id !== id))
      setSuccessMessage('Counsellor removed successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    }
  }

  const handleToggleStatus = (id) => {
    setCounsellors(counsellors.map(c => 
      c.id === id ? { ...c, status: c.status === 'Active' ? 'Inactive' : 'Active' } : c
    ))
  }

  return (
    <div className="page-container">
      <h1>👥 Manage Counsellors</h1>
      <p className="subtitle">Connect students with experienced career counsellors</p>

      {successMessage && (
        <section className="section">
          <div className="alert alert-success">✓ {successMessage}</div>
        </section>
      )}

      {/* Add Counsellor Button */}
      <section className="section">
        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => {
              setShowForm(!showForm)
              setEditingId(null)
              setFormData({ name: '', specialization: '', experience: '', bio: '', email: '' })
            }}
          >
            {showForm ? '✕ Cancel' : '+ Add New Counsellor'}
          </button>
        </div>
      </section>

      {/* Add/Edit Form */}
      {showForm && (
        <section className="section">
          <h2>{editingId ? 'Edit Counsellor' : 'Add New Counsellor'}</h2>
          <form onSubmit={handleAddCounsellor}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div className="form-group">
                <label>Specialization *</label>
                <select 
                  name="specialization" 
                  value={formData.specialization}
                  onChange={handleChange}
                >
                  <option value="">-- Select Specialization --</option>
                  {specializations.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Years of Experience *</label>
                <input 
                  type="text" 
                  name="experience" 
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 15 years"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Bio/Description</label>
              <textarea 
                name="bio" 
                value={formData.bio}
                onChange={handleChange}
                placeholder="Enter counsellor bio"
                rows="3"
              ></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                {editingId ? '✓ Update Counsellor' : '✓ Add Counsellor'}
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                  setFormData({ name: '', specialization: '', experience: '', bio: '', email: '' })
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Counsellors Table */}
      <section className="section">
        <h2>Counsellors List ({counsellors.length})</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {counsellors.map(counsellor => (
                <tr key={counsellor.id}>
                  <td><strong>{counsellor.name}</strong></td>
                  <td>{counsellor.specialization}</td>
                  <td>{counsellor.experience}</td>
                  <td>
                    <button 
                      style={{
                        background: counsellor.status === 'Active' ? '#d4edda' : '#f8d7da',
                        color: counsellor.status === 'Active' ? '#155724' : '#721c24',
                        border: 'none',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleToggleStatus(counsellor.id)}
                    >
                      {counsellor.status}
                    </button>
                  </td>
                  <td>
                    <div className="button-group" style={{gap: '0.5rem'}}>
                      <button 
                        className="btn btn-small"
                        onClick={() => handleEditCounsellor(counsellor)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => handleDeleteCounsellor(counsellor.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Engagement Stats */}
      <section className="section">
        <h2>📊 Counsellor Engagement</h2>
        <div className="grid">
          {counsellors.filter(c => c.status === 'Active').map(counsellor => (
            <div key={counsellor.id} className="dashboard-card">
              <h3>{counsellor.name}</h3>
              <p style={{fontSize: '0.9rem', marginBottom: '0.5rem'}}>{counsellor.specialization}</p>
              <div className="dashboard-card-value">8</div>
              <p>Sessions this month</p>
              <button className="btn btn-small" style={{marginTop: '0.5rem', width: '100%'}}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
