# 🎓 Career Guidance & Counseling Platform

A modern, responsive React web application designed to connect students with career guidance and professional counseling services. Features dual-role support for students and administrators with an intuitive interface and seamless user experience.

---

## ✨ Key Features

### 👨‍🎓 Student Features
- **Personal Dashboard** – Overview of bookings, progress, and recommended career paths
- **Career Exploration** – Browse and filter careers across multiple industries
- **Find Counselors** – Discover and filter counselors by specialization and expertise
- **Session Booking** – Schedule one-on-one or group counseling sessions
- **Profile Management** – Edit personal info, skills, and career interests
- **Resource Access** – View career guides and learning materials

### 👨‍💼 Admin Features
- **Admin Dashboard** – Monitor user activity, sessions, and platform statistics
- **Counselor Management** – Add, edit, and manage counselor profiles
- **Resource Management** – Create and update career resources and guides
- **Engagement Tracking** – Analytics and user activity monitoring
- **Platform Health** – Real-time performance metrics and insights

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **npm** v6+ (comes with Node.js)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd "carrier guaidance"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:3000
   ```

### Demo Login

**Use any credentials:**
- Email: `test@example.com` (or any email)
- Password: `demo123` (or any password)
- Role: Select "Student" or "Admin"

> 💡 This is a demo application with mock authentication. All data is stored locally.

---

## 📂 Project Structure

```
career-guidance/
├── src/
│   ├── components/
│   │   └── Navbar.jsx                # Navigation component
│   ├── pages/
│   │   ├── Login.jsx                # User authentication
│   │   ├── SignUp.jsx               # User registration
│   │   ├── UserDashboard.jsx        # Student dashboard
│   │   ├── AdminDashboard.jsx       # Admin overview
│   │   ├── CareerPaths.jsx          # Career exploration
│   │   ├── CounsellorList.jsx       # Find counselors
│   │   ├── BookSession.jsx          # Session booking
│   │   ├── UserProfile.jsx          # Profile management
│   │   ├── AdminResources.jsx       # Resource management
│   │   └── AdminCounsellors.jsx     # Counselor management
│   ├── styles/
│   │   ├── Common.css               # Global styles
│   │   ├── Navbar.css               # Navigation styles
│   │   ├── Login.css                # Auth page styles
│   │   └── Dashboard.css            # Dashboard styles
│   ├── App.jsx                      # App root with routing
│   ├── App.css                      # App-level styles
│   ├── index.css                    # Global stylesheet
│   └── main.jsx                     # React entry point
├── public/
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 User Guides

### For Students

1. **Sign Up / Login**
   - Create account or use demo credentials
   - Select "Student" role

2. **Explore Careers**
   - Navigate to "Explore Career Paths"
   - Filter by field or search
   - Click any career for detailed information

3. **Find a Counselor**
   - Visit "Find Counselors"
   - Filter by specialization
   - Review profiles and ratings

4. **Book a Session**
   - Click "Book Session" 
   - Select counselor and session type
   - Choose date/time
   - Confirm booking

5. **Manage Profile**
   - Update personal information
   - Add skills and interests
   - View session history

### For Admins

1. **Login as Admin**
   - Use demo credentials
   - Select "Admin" role

2. **View Dashboard**
   - Monitor key metrics
   - Track user activity
   - Review session statistics

3. **Manage Counselors**
   - Add new counselor profiles
   - Edit existing information
   - Remove inactive counselors

4. **Manage Resources**
   - Create career resources/guides
   - Edit resource content
   - Delete outdated materials

5. **Monitor Engagement**
   - View user activity logs
   - Track session bookings
   - Review platform usage

---

## 🛣️ All Routes

| Route | Purpose | Role |
|-------|---------|------|
| `/` | Login/Home | Public |
| `/signup` | User Registration | Public |
| `/user/dashboard` | Dashboard | Student |
| `/user/career-paths` | Career Exploration | Student |
| `/user/counsellors` | Find Counselors | Student |
| `/user/book-session` | Book Session | Student |
| `/user/profile` | Profile Management | Student |
| `/admin/dashboard` | Admin Overview | Admin |
| `/admin/resources` | Manage Resources | Admin |
| `/admin/counsellors` | Manage Counselors | Admin |

---

## 🎨 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library & component framework |
| **React Router v6** | Client-side routing & navigation |
| **Vite** | Build tool & development server |
| **CSS3** | Styling with gradients & animations |
| **JavaScript (ES6+)** | Application logic |

---

## 📦 Available Commands

```bash
# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Design System

### Colors
- **Primary:** `#667eea` (Purple)
- **Secondary:** `#764ba2` (Dark Purple)
- **Success:** `#51cf66` (Green)
- **Danger:** `#ff6b6b` (Red)
- **Background:** `#f5f5f5` (Light Gray)

### Design Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern gradient theme
- ✅ Smooth hover effects & transitions
- ✅ Card-based layout
- ✅ Modal dialogs for detailed views
- ✅ Status badges & indicators
- ✅ Accessibility-friendly

---

## 🔧 Customization Guide

### Changing Colors
Edit the color variables in `src/index.css` and `src/App.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #51cf66;
  --danger-color: #ff6b6b;
}
```

### Adding Career Data
Edit `src/pages/CareerPaths.jsx` to add more career options with details like salary, skills, and growth potential.

### Customizing Counselor List
Modify `src/pages/CounsellorList.jsx` to change specializations, ratings, or availability.

### Updating Resources
Edit `src/pages/AdminResources.jsx` to add new resource categories and guides.

---

## 📝 Important Notes

⚠️ **Demo Application:**
- Data is NOT persistent (refreshing the page resets all data)
- Authentication is mock-based for demonstration
- All data stored in component state only

🔌 **To Add Backend Integration:**
- Replace mock API calls with real endpoints
- Implement proper authentication (JWT/OAuth)
- Add database for persistent storage (MongoDB, PostgreSQL, etc.)
- Use environment variables for API URLs

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npx vite --port 3001
```

### Dependencies Not Installed
```bash
# Clear npm cache and reinstall
npm cache clean --force
npm install
```

### Hot Reload Not Working
- Ensure Vite dev server is running
- Check browser console for errors
- Try refreshing the page

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

---

## 📧 Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Made with ❤️ for Career Guidance & Student Success**
"# python--frontend-project" 
