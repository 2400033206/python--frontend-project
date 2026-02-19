import React, { useState } from 'react'
import '../styles/Dashboard.css'

export default function AdminResources() {
  const [resources, setResources] = useState([
    { id: 1, title: 'Web Development Career Guide', category: 'Tech', description: 'Complete guide for web developers' },
    { id: 2, title: 'Data Science Roadmap', category: 'Tech', description: 'Learning path for data scientists' },
    { id: 3, title: 'Business Skills Workshop', category: 'Business', description: 'Essential business skills training' },
    { id: 4, title: 'Interview Preparation Guide', category: 'Career', description: 'Tips for job interviews' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    link: ''
  })

  const [editingId, setEditingId] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')

  const categories = ['Tech', 'Business', 'Career', 'Skills', 'Personal Development']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddResource = (e) => {
    e.preventDefault()

    if (!formData.title || !formData.category || !formData.description) {
      alert('Please fill in all fields')
      return
    }

    if (editingId) {
      setResources(resources.map(r => r.id === editingId ? { ...formData, id: editingId } : r))
      setEditingId(null)
    } else {
      setResources([...resources, { ...formData, id: Date.now() }])
    }

    setFormData({ title: '', category: '', description: '', link: '' })
    setShowForm(false)
    setSuccessMessage(`Resource ${editingId ? 'updated' : 'added'} successfully!`)
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleEditResource = (resource) => {
    setFormData(resource)
    setEditingId(resource.id)
    setShowForm(true)
  }

  const handleDeleteResource = (id) => {
    if (confirm('Are you sure you want to delete this resource?')) {
      setResources(resources.filter(r => r.id !== id))
      setSuccessMessage('Resource deleted successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    }
  }

  return (
    <div className="page-container">
      <h1>📚 Manage Career Resources</h1>
      <p className="subtitle">Add, edit, and manage career guidance resources</p>

      {successMessage && (
        <section className="section">
          <div className="alert alert-success">✓ {successMessage}</div>
        </section>
      )}

      {/* Add Resource Button */}
      <section className="section">
        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => {
              setShowForm(!showForm)
              setEditingId(null)
              setFormData({ title: '', category: '', description: '', link: '' })
            }}
          >
            {showForm ? '✕ Cancel' : '+ Add New Resource'}
          </button>
        </div>
      </section>

      {/* Add/Edit Form */}
      {showForm && (
        <section className="section">
          <h2>{editingId ? 'Edit Resource' : 'Add New Resource'}</h2>
          <form onSubmit={handleAddResource}>
            <div className="form-group">
              <label>Resource Title *</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter resource title"
              />
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select 
                name="category" 
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">-- Select Category --</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter resource description"
                rows="4"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Resource Link</label>
              <input 
                type="url" 
                name="link" 
                value={formData.link}
                onChange={handleChange}
                placeholder="Enter link to resource"
              />
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                {editingId ? '✓ Update Resource' : '✓ Add Resource'}
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                  setFormData({ title: '', category: '', description: '', link: '' })
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Resources Table */}
      <section className="section">
        <h2>Resources List ({resources.length})</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => (
                <tr key={resource.id}>
                  <td><strong>{resource.title}</strong></td>
                  <td><span style={{background: '#667eea', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px'}}>{resource.category}</span></td>
                  <td>{resource.description}</td>
                  <td>
                    <div className="button-group" style={{gap: '0.5rem'}}>
                      <button 
                        className="btn btn-small"
                        onClick={() => handleEditResource(resource)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => handleDeleteResource(resource.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section">
        <h2>📊 Resources by Category</h2>
        <div className="grid">
          {categories.map(cat => {
            const count = resources.filter(r => r.category === cat).length
            return (
              <div key={cat} className="dashboard-card">
                <h3>{cat}</h3>
                <div className="dashboard-card-value">{count}</div>
                <p>Resources available</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
