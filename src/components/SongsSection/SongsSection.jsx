import React, { useEffect, useState, useRef } from 'react';
import Section from '../Section/Section';
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import styles from './SongsSection.module.css';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState('all');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(response.data);
      } catch (err) {
        console.error('Error fetching songs:', err);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
        setGenres([{ label: 'All', key: 'all' }, ...response.data.data]);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveGenre(newValue);
  };

  const filteredSongs =
    activeGenre === 'all'
      ? songs
      : songs.filter((song) => song.genre.key === activeGenre);

  return (
    <div>
    <div className={styles.songsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Songs</h2>
        <Tabs
          value={activeGenre}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          className={styles.tabs}
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
              className={styles.tab}
            />
          ))}
        </Tabs>
      </div>

      <Section
        title=""
        type="song"
        data={filteredSongs}
        showToggleButton={false}
      />
    </div>
     <Carousel
        items={songs.map(song => (
          <Card key={song.id} image={song.image} title={song.title} likes={song.likes} />
        ))}
        prevRef={prevRef}
        nextRef={nextRef}
      />

    /</div>
  );
};

export default SongsSection;
