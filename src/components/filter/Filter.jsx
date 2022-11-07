import PropTypes from 'prop-types';

export const Filter = ({ onFilterChange, filterValue }) => {
  const handleChange = e => {
    onFilterChange(e.target.value);
  };
  return (
    <label>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
};
