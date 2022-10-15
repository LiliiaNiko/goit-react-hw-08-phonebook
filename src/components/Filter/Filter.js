import React from 'react';
import { FilterWrap, Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => dispatch(changeFilter(evt.currentTarget.value));
  return (
    <FilterWrap>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterWrap>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
