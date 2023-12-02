// import component
import { Input } from 'components';

// import selector and actionCreator
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';

// import styled component
import { FilterWrapper } from './Filter.styled';

// import icon
import { BsSearch } from 'react-icons/bs';

// other import
import throttle from 'lodash.throttle';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  //get filter value for cleaning filterInput value
  const filterValue = useSelector(selectFilter);

  const onFilterInput = e => {
    // get filter value
    let filterValue = e.target.value;

    // if value !== "", transform to lowerCase
    if (filterValue) {
      filterValue = filterValue.toLowerCase();
    }

    // sending payload
    dispatch(setFilter(filterValue));
  };

  return (
    <FilterWrapper>
      <Input
        type="text"
        name="filter"
        placeholder={'Contact filtering'}
        icon={() => <BsSearch />}
        // throttling callback
        onFilterInput={throttle(onFilterInput, 2000)}
        filterValue={filterValue}
      />
    </FilterWrapper>
  );
};
