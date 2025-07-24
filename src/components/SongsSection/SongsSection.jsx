import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SongsSection.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get('https://qtify-backend-labs.crio.do/songs'),
          axios.get('https://qtify-backend-labs.crio.do/genres'),
        ]);
        setSongs(songsRes.data);
        setGenres([{ label: 'All', key: 'all' }, ...genresRes.data.data]);
      } catch (error) {
        console.error('Failed to fetch songs or genres', error);
      }
    };

    fetchSongsAndGenres();
  }, []);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleGenreChange = (key) => {
    setSelectedGenre(key);
  };

  const filteredSongs =
    selectedGenre === 'all'
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Songs</h2>
        <span className={styles.toggleText} onClick={handleToggle}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </span>
      </div>

      <div className={styles.genreTabs}>
        {genres.map((genre) => (
          <button
            key={genre.key}
            className={`${styles.tabButton} ${
              selectedGenre === genre.key ? styles.activeTab : ''
            }`}
            onClick={() => handleGenreChange(genre.key)}
          >
            {genre.label}
          </button>
        ))}
      </div>

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
