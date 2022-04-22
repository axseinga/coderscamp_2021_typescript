import React from 'react';
import { Link } from 'react-router-dom';

import { SearchBar } from '../../features/SearchBar/SearchBar';
export const Navigation = () => {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        <Link to={'/'}>Home</Link>
        <SearchBar />
      </ul>
    </nav>
  );
};
