import React from 'react';

export const SearchBar = () => {
  return (
    <form action="/restaurant" method="get">
      <input placeholder="Search" type="text" id="search-bar" />
      <label htmlFor="search-bar"></label>
    </form>
  );
};
