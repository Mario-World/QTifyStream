import React from 'react';
import styles from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ placeholder = "Search an album of your choice...", value = '', onChange }) => {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.searchWrapper} data-testid="search-bar">
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
