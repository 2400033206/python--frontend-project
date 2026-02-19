import React, { useState } from 'react'
import '../styles/Dashboard.css'

export default function UserProfile({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+1 (555) 123-4567',
    education: 'Bachelor of Science in Computer Science',
    university: 'Tech University',
    graduationYear: '2024',
    skills: ['Python', 'JavaScript', 'React', 'Data Analysis'],
    interests: ['Software Development', 'AI/ML', 'Web Development'],
    bio: 'Passionate about technology and continuous learning'
  })

  const [newSkill, setNewSkill] = useState('')
  const [newInterest, setNewInterest] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }))
      setNewSkill('')
    }
  }

  const handleRemoveSkill = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }))
  }

  const handleAddInterest = () => {
    if (newInterest && !profile.interests.includes(newInterest)) {
      setProfile(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest]
      }))
      setNewInterest('')
    }
  }

  const handleRemoveInterest = (interest) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }))
  }

  const handleSaveProfile = () => {
    setUser(profile)
    setIsEditing(false)
    setSuccessMessage('Profile updated successfully!')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  return (
    <div className="page-container">
      <h1>👤 My Profile</h1>
      <p className="subtitle">Manage your career guidance profile</p>

      {successMessage && (
        <section className="section">
          <div className="alert alert-success">✓ {successMessage}</div>
        </section>
      )}

      {/* Profile Header */}
      <section className="section">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
          <h2>Profile Information</h2>
          <button 
            className={`btn ${isEditing ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => {
              if (isEditing) {
                handleSaveProfile()
              } else {
                setIsEditing(true)
              }
            }}
          >
            {isEditing ? '✓ Save Changes' : '✎ Edit Profile'}
          </button>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={profile.name}
                onChange={handleProfileChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={profile.email}
                onChange={handleProfileChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                name="phone" 
                value={profile.phone}
                onChange={handleProfileChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="card">
            <h3>Education</h3>
            <div className="form-group">
              <label>Degree/Field of Study</label>
              <input 
                type="text" 
                name="education" 
                value={profile.education}
                onChange={handleProfileChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>University/College</label>
              <input 
                type="text" 
                name="university" 
                value={profile.university}
                onChange={handleProfileChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Graduation Year</label>
              <input 
                type="text" 
                name="graduationYear" 
                value={profile.graduationYear}
                onChange={handleProfileChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Bio</h3>
          <div className="form-group">
            <label>About You</label>
            <textarea 
              name="bio" 
              value={profile.bio}
              onChange={handleProfileChange}
              disabled={!isEditing}
              rows="3"
            ></textarea>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>💡 Skills</h2>
        <div className="card">
          <div style={{marginBottom: '1rem'}}>
            <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
              <input 
                type="text" 
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new skill"
                disabled={!isEditing}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && isEditing) {
                    handleAddSkill()
                  }
                }}
              />
              <button 
                className="btn btn-primary"
                onClick={handleAddSkill}
                disabled={!isEditing}
              >
                + Add
              </button>
            </div>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {profile.skills.map((skill, idx) => (
              <div key={idx} className="skill-tag" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>{skill}</span>
                {isEditing && (
                  <button 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      fontSize: '1.2rem'
                    }}
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section">
        <h2>🎯 Career Interests</h2>
        <div className="card">
          <div style={{marginBottom: '1rem'}}>
            <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
              <input 
                type="text" 
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                placeholder="Add career interest"
                disabled={!isEditing}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && isEditing) {
                    handleAddInterest()
                  }
                }}
              />
              <button 
                className="btn btn-primary"
                onClick={handleAddInterest}
                disabled={!isEditing}
              >
                + Add
              </button>
            </div>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {profile.interests.map((interest, idx) => (
              <div key={idx} className="interest-tag" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>{interest}</span>
                {isEditing && (
                  <button 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      fontSize: '1.2rem'
                    }}
                    onClick={() => handleRemoveInterest(interest)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section">
        <h2>📊 Your Statistics</h2>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Sessions Completed</h3>
            <div className="dashboard-card-value">7</div>
          </div>

          <div className="dashboard-card">
            <h3>Counsellors Connected</h3>
            <div className="dashboard-card-value">5</div>
          </div>

          <div className="dashboard-card">
            <h3>Career Paths Explored</h3>
            <div className="dashboard-card-value">12</div>
          </div>

          <div className="dashboard-card">
            <h3>Profile Completion</h3>
            <div className="dashboard-card-value">85%</div>
          </div>
        </div>
      </section>

      {/* Account Settings */}
      <section className="section">
        <h2>⚙️ Account Settings</h2>
        <div className="grid">
          <div className="card">
            <h3>🔐 Password</h3>
            <p>Change your password to keep your account secure.</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              Change Password
            </button>
          </div>

          <div className="card">
            <h3>🔔 Notifications</h3>
            <p>Manage your notification preferences.</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              Notification Settings
            </button>
          </div>

          <div className="card">
            <h3>📥 Download Data</h3>
            <p>Download your profile and activity data.</p>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>
              Download My Data
            </button>
          </div>

          <div className="card">
            <h3>🚪 Logout</h3>
            <p>Sign out from all devices.</p>
            <button className="btn btn-danger" style={{marginTop: '1rem'}}>
              Logout All Devices
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
