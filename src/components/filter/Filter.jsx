import React from 'react'
import PropTypes from 'prop-types';
import styles from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={styles['filter-wrapper']}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        type="text"
        id="filter"
      />
    </div>
  )
}

export default Filter

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};