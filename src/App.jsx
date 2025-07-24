// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import SongsSection from './components/SongsSection/SongsSection';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar />
        <Hero />
        <Section
          title="Top Albums"
          endpoint="https://qtify-backend-labs.crio.do/albums/top"
        />
        <Section
          title="New Albums"
          endpoint="https://qtify-backend-labs.crio.do/albums/new"
        />
        <SongsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
