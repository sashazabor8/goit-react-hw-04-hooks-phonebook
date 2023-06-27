import React from 'react';
import s from './Filter.module.css';

function Filter({ filter, filterChange }) {
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        className={s.input}
        onChange={filterChange}
        value={filter}
      />
    </label>
  );
}

export default Filter;
