import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SongsSection.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
        setGenres([{ key: 'all', label: 'All' }, ...response.data.data]);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === 'all' ? songs : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Songs</h2>
        <button className={styles.toggleButton} onClick={() => setIsCollapsed((prev) => !prev)}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>

      <Tabs
        value={selectedGenre}
        onChange={handleGenreChange}
        className={styles.tabs}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="genre tabs"
      >
        {genres.map((genre) => (
          <Tab key={genre.key} value={genre.key} label={genre.label} className={styles.tab} />
        ))}
      </Tabs>

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
