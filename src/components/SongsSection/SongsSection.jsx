import React, { useEffect, useState } from 'react';
import styles from './SongsSection.module.css';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import { Tab, Tabs, Box } from '@mui/material';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get('https://qtify-backend-labs.crio.do/songs'),
          axios.get('https://qtify-backend-labs.crio.do/genres'),
        ]);

        setSongs(songsRes.data);
        setGenres(genresRes.data.data);
        setFilteredSongs(songsRes.data);
      } catch (error) {
        console.error('Error fetching songs or genres:', error);
      }
    };

    fetchSongsAndGenres();
  }, []);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
    if (newValue === 'all') {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter((song) => song.genre.key === newValue));
    }
  };

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Songs</h2>
        <button className={styles.toggleButton} onClick={handleToggle}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>

      {/* Genre Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedGenre}
          onChange={handleGenreChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="All" value="all" />
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>
      </Box>

      {/* Song Display */}
      {isCollapsed ? (
        <Carousel
          items={filteredSongs.map((song) => (
            <Card
              key={song.id}
              image={song.image}
              title={song.title}
              likes={song.likes}
              type="song"
            />
          ))}
        />
      ) : (
        <div className={styles.cardGrid}>
          {filteredSongs.map((song) => (
            <Card
              key={song.id}
              image={song.image}
              title={song.title}
              likes={song.likes}
              type="song"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongsSection;
