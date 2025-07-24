import React from 'react';
import styles from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ placeholder = "Search an album of your choice...", value, onChange }) => {
  return (
    <div className={styles.searchWrapper}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
