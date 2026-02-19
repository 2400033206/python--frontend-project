# 🎓 Career Guidance & Counseling Platform

A comprehensive React web application that offers career advice, mentorship, and counseling services to students.

## 📋 Features

### For Users (Students)
- ✅ **Dashboard** - View personalized dashboard with quick stats and recommendations
- ✅ **Career Paths** - Explore various career opportunities with detailed information
- ✅ **Find Counsellors** - Browse and connect with experienced career counsellors
- ✅ **Book Sessions** - Schedule one-on-one or group counseling sessions
- ✅ **User Profile** - Manage profile, skills, interests, and preferences
- ✅ **Career Resources** - Access guides, tips, and career-related materials

### For Admin
- ✅ **Admin Dashboard** - View platform statistics and user engagement metrics
- ✅ **Manage Resources** - Add, edit, and delete career resources
- ✅ **Manage Counsellors** - Add, edit, and manage counsellor profiles
- ✅ **Track Engagement** - Monitor user activities and session bookings
- ✅ **Analytics** - View platform health and performance metrics

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The app will automatically open at `http://localhost:3000`

### Demo Login Credentials
- **Email:** any email
- **Password:** any password
- **Role:** Select "Student/User" or "Admin"

*(This is a demo platform with mock authentication)*

## 📂 Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Login.jsx           # Login page
│   ├── UserDashboard.jsx   # User dashboard
│   ├── AdminDashboard.jsx  # Admin dashboard
│   ├── CareerPaths.jsx     # Career exploration
│   ├── CounsellorList.jsx  # Find counsellors
│   ├── BookSession.jsx     # Book sessions
│   ├── UserProfile.jsx     # User profile management
│   ├── AdminResources.jsx  # Resource management
│   └── AdminCounsellors.jsx # Counsellor management
├── styles/
│   ├── Navbar.css          # Navigation styles
│   ├── Login.css           # Login page styles
│   └── Dashboard.css       # Dashboard and general styles
├── App.jsx                 # Main app component with routing
├── App.css                 # App-wide styles
├── index.css               # Global styles
└── main.jsx                # App entry point
```

## 🎯 Usage Guide

### For Students
1. **Login** - Enter any email/password and select "Student/User" role
2. **Explore Careers** - Click "Explore Career Paths" to browse opportunities
3. **Find Counsellors** - Browse counsellors by specialization
4. **Book Session** - Schedule time with a counsellor
5. **Manage Profile** - Update skills, interests, and personal information

### For Admin
1. **Login** - Enter any email/password and select "Admin" role
2. **Manage Resources** - Add career resources and guides
3. **Manage Counsellors** - Add/edit counsellor information
4. **Track Engagement** - Monitor user activities and bookings

## 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Button-based Navigation** - All features accessible through buttons
- **Interactive Cards** - Career paths, counsellors, and resources displayed in card format
- **Forms** - Easy-to-use forms for bookings and profile updates
- **Modals** - Detailed information in popup modals
- **Status Badges** - Visual indicators for session status
- **Gradient Design** - Modern purple gradient theme
- **Smooth Animations** - Hover effects and transitions

## 🔌 Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Core functionality

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🛣️ Routing

- `/` - Home/Login
- `/user/dashboard` - User dashboard
- `/user/career-paths` - Career exploration
- `/user/counsellors` - Find counsellors
- `/user/book-session` - Book sessions
- `/user/profile` - User profile
- `/admin/dashboard` - Admin dashboard
- `/admin/resources` - Manage resources
- `/admin/counsellors` - Manage counsellors

## 📊 Key Functionality

### Career Paths Section
- Filter careers by field (Technology, Design, Business)
- View detailed career information including salary ranges
- Save favorite career paths
- Learn about required skills and growth opportunities

### Counsellor Management
- Filter counsellors by specialization
- View counsellor profiles and ratings
- Book sessions directly
- Select session type (30 min, 60 min, or group)

### User Profiles
- Edit personal information
- Add/remove skills
- Add/remove career interests
- Track session history and statistics
- View profile completion percentage

### Admin Features
- Dashboard with platform statistics
- Real-time user engagement tracking
- Resource management (CRUD operations)
- Counsellor management interface
- Activity logs and monitoring

## 🎨 Customization

### Colors
Edit `src/App.css` and `src/index.css` to change:
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Success color: `#51cf66`
- Danger color: `#ff6b6b`

### Content
Update `src/pages/` files to add or modify:
- Career paths data
- Counsellor information
- Resources and guides
- User information

## 📝 Notes

- This is a demo/prototype application
- All data is stored in component state (not persistent)
- Authentication is mock-based for demo purposes
- To add persistence, integrate with a backend API

## 🤝 Contributing

Feel free to fork this project and make improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for career guidance and student success**
