import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/reducers/filterReducer';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChange(e.target.value));
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
