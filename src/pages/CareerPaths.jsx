import React, { useState } from 'react'
import '../styles/Dashboard.css'

export default function CareerPaths() {
  const [careers, setCareers] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      field: 'Technology',
      salary: '$80,000 - $150,000',
      description: 'Design, develop, and maintain software applications.',
      skills: ['Programming', 'Problem Solving', 'System Design'],
      image: '💻'
    },
    {
      id: 2,
      title: 'Data Scientist',
      field: 'Technology',
      salary: '$85,000 - $160,000',
      description: 'Analyze complex data sets to help organizations make better decisions.',
      skills: ['Statistics', 'Python', 'Machine Learning'],
      image: '📊'
    },
    {
      id: 3,
      title: 'Product Manager',
      field: 'Technology',
      salary: '$70,000 - $140,000',
      description: 'Lead product development from conception to launch.',
      skills: ['Leadership', 'Communication', 'Strategic Planning'],
      image: '🎯'
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      field: 'Design',
      salary: '$60,000 - $120,000',
      description: 'Create intuitive and engaging user experiences.',
      skills: ['Design Thinking', 'Prototyping', 'User Research'],
      image: '🎨'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      field: 'Technology',
      salary: '$90,000 - $170,000',
      description: 'Manage and optimize infrastructure and deployment.',
      skills: ['Cloud Computing', 'Linux', 'Docker'],
      image: '⚙️'
    },
    {
      id: 6,
      title: 'Business Analyst',
      field: 'Business',
      salary: '$65,000 - $125,000',
      description: 'Analyze business processes and recommend improvements.',
      skills: ['Analysis', 'Communication', 'SQL'],
      image: '📈'
    }
  ])

  const [selectedCareer, setSelectedCareer] = useState(null)
  const [filter, setFilter] = useState('All')
  const [saved, setSaved] = useState([])

  const fields = ['All', 'Technology', 'Design', 'Business']
  const filtered = filter === 'All' ? careers : careers.filter(c => c.field === filter)

  const handleSaveCareer = (careerID) => {
    if (saved.includes(careerID)) {
      setSaved(saved.filter(id => id !== careerID))
    } else {
      setSaved([...saved, careerID])
    }
  }

  return (
    <div className="page-container">
      <h1>🎯 Explore Career Paths</h1>
      <p className="subtitle">Discover opportunities that match your skills and interests</p>

      {/* Filter Section */}
      <section className="section">
        <h2>Filter by Field</h2>
        <div className="button-group">
          {fields.map((field) => (
            <button
              key={field}
              className={`btn ${filter === field ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter(field)}
            >
              {field}
            </button>
          ))}
        </div>
      </section>

      {/* Search and Info */}
      <section className="section">
        <p>Showing {filtered.length} career paths</p>
        <p className="subtitle" style={{marginTop: '1rem'}}>
          Each career path includes detailed information about required skills, salary ranges, and growth opportunities.
        </p>
      </section>

      {/* Career Cards Grid */}
      <div className="grid">
        {filtered.map((career) => (
          <div key={career.id} className="card">
            <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{career.image}</div>
            <h3>{career.title}</h3>
            <p style={{color: '#667eea', fontWeight: 'bold'}}>{career.field}</p>
            <p><strong>Salary Range:</strong> {career.salary}</p>
            <p className="card-description">{career.description}</p>
            
            <div style={{marginBottom: '1rem'}}>
              <strong>Required Skills:</strong>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem'}}>
                {career.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="button-group">
              <button 
                className="btn btn-primary" 
                onClick={() => setSelectedCareer(career)}
              >
                Learn More
              </button>
              <button 
                className={`btn ${saved.includes(career.id) ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => handleSaveCareer(career.id)}
              >
                {saved.includes(career.id) ? '❤️ Saved' : '🤍 Save'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedCareer && (
        <div className="modal" onClick={() => setSelectedCareer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedCareer.image} {selectedCareer.title}</h2>
              <button className="close-btn" onClick={() => setSelectedCareer(null)}>×</button>
            </div>

            <div className="modal-body">
              <h3>Overview</h3>
              <p>{selectedCareer.description}</p>

              <h3 style={{marginTop: '1.5rem'}}>Salary Information</h3>
              <p>{selectedCareer.salary} per year</p>

              <h3 style={{marginTop: '1.5rem'}}>Field</h3>
              <p>{selectedCareer.field}</p>

              <h3 style={{marginTop: '1.5rem'}}>Required Skills</h3>
              <ul>
                {selectedCareer.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>

              <h3 style={{marginTop: '1.5rem'}}>Career Growth</h3>
              <p>Entry Level → Mid Level → Senior Level → Leadership</p>

              <h3 style={{marginTop: '1.5rem'}}>Education Requirements</h3>
              <p>Bachelor's degree or equivalent experience</p>

              <div className="button-group" style={{marginTop: '1.5rem'}}>
                <button className="btn btn-primary">
                  📧 Request Counseling
                </button>
                <button className="btn btn-secondary" onClick={() => setSelectedCareer(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
