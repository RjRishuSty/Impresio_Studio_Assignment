# 📸 Pixisphere - Photographer Directory Platform

Pixisphere is a modern, feature-rich React-based application that allows users to discover and filter photographers specializing in maternity, birthday, newborn, and other special shoots. Built as part of a frontend assignment, the platform emphasizes clean UI, seamless UX, and dynamic data interactions using a mock backend.

---

## 🔗 Live Demo

- 🚀 **Frontend (Vercel)**: [pixisphere-photographer.vercel.app](https://pixisphere-photographers-five.vercel.app/)
- 🌐 **Backend API (Render)**: [pixisphere-api-b4dq.onrender.com](https://pixisphere-api-b4dq.onrender.com)
- 🛠️ **GitHub Repository**: [GitHub Repo](https://github.com/RjRishuSty/Impresio_Studio_Assignment.git)

---

## 🧰 Tech Stack

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| **React**             | Frontend framework                 |
| **Redux Toolkit**     | State management                   |
| **React Router DOM**  | Routing between pages              |
| **Material UI (MUI)** | UI components & icons              |
| **JSON Server**       | Mock backend / REST API            |
| **Axios**             | Handling HTTP requests             |
| **Vite**              | Lightning-fast build tool          |
| **SwiperJS**          | Image carousel for reviews/gallery |
| **notistack**          | show notification |

---

## ✨ Key Features

### 🔍 Category Listing Page

- 📷 Photographer Cards with:

  - Profile Picture
  - Name
  - Location
  - Price & Rating
  - Tags (maternity, birthday, etc.)
  - Styles (candid, traditional, etc.)

- ✅ **Debounced Search** (500ms delay)
- ✅ **Advanced Filters**:

  - City
  - Styles
  - Price Range
  - Ratings

- 📊 **Sort By**:

  - Price: Low to High
  - Rating: High to Low
  - Recently Added

- 🔁 **Infinite Scroll** / "Load More" Pagination
- ⏳ Skeleton Loader while fetching data
- ❌ "No Photographers Found" message when filters/search return empty results

---

### 👤 Photographer Profile Page

- 📝 Detailed bio and description
- 🎯 Styles & Tags display
- 💵 Price and rating info
- 🖼️ Image portfolio (grid layout)
- 🗣️ Client reviews section with carousel
- 📩 “Send Inquiry” Modal Form:
  - Name
  - Message
  - Inquiry confirmation

---

### 📌 Assignment Highlights

- 🔧 Well-structured and modular component-based architecture

- 🎯 Pixel-perfect and mobile responsive design

- ⚡ Optimized performance with debouncing and lazy loading

- 🔄 Realistic filtering/sorting/pagination UX using mock API

- 📬 Inquiry form implementation with validation & modal UI

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have the following installed:

- Node.js
- npm / yarn

### 🖥️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/RjRishuSty/Impresio_Studio_Assignment.git
   cd Impresio_Studio_Assignment
   ```

```cd frontend
npm install



