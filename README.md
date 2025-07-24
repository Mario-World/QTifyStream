

## 🎵 QTify - Music Discovery App

QTify is a modern, responsive music UI built with **React** and **SwiperJS**, designed to mimic a streaming experience with sections for **Top Albums**, **New Albums**, and **Songs by Genre**. It features reusable components, carousel navigation, dark theme styling, and real-time data fetching from an API.

---

### 🚀 Features

* 🎧 Hero section with dynamic background and central headphone image
* 🔍 Responsive search bar with icon
* 💽 Top Albums and New Albums sections with carousel navigation
* 🎶 Songs section with genre-based filtering using tabs
* 🔁 Reusable `Card`, `Carousel`, and `Section` components
* 🌑 Dark theme across the application
* 🧭 Left and Right navigation buttons in carousels
* 🖼️ Assets managed via the `public/assets` folder
* ⚡ Powered by the [Crio Qtify API](https://qtify-backend-labs.crio.do)

---

### 📁 Folder Structure

```
src/
├── components/
│   ├── Card/
│   ├── Carousel/
│   ├── Section/
│   ├── SongsSection/
│   ├── Navbar/
│   ├── Hero/
│   ├── Logo/
│   ├── Search/
│   └── Button/
├── App.jsx
├── App.css
└── main.jsx

public/
└── assets/
    ├── logo.png
    ├── hero_headphones.png
    ├── left_arrow.svg
    └── right_arrow.svg
```

---

### 🛠️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/qtify-music-app.git
cd qtify-music-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

---

### 🔗 API Endpoints Used

* `GET /albums/top` — Fetch top albums
* `GET /albums/new` — Fetch new albums
* `GET /songs` — Fetch all songs
* `GET /genres` — Fetch genre list

Base URL: `https://qtify-backend-labs.crio.do`

---

### 🖥️ Tech Stack

* ⚛️ React
* 💅 CSS Modules
* 🎠 Swiper.js for carousels
* 🧩 Material UI (MUI) for icons
* 📂 Public asset management with Vite

---

### 🧪 Features You Can Add

* Search functionality with debounce
* Like/Follow buttons on Cards
* Mobile-first design optimization
* Skeleton loaders while fetching data
* Click to expand album/song details

---

### 📝 License

This project is open source and available under the [MIT License](LICENSE).


