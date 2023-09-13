import { useDispatch } from 'react-redux';
import { FilterLabel } from './Filter.styled';
import { setFilterContacts } from '../../redux/contacts/filtersSlice';

export function Filter() {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={handlerFilter} />
    </FilterLabel>
  );
}