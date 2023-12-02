// import styled component
import { InputLabel } from './Input.styled';

export const Input = ({
  type,
  name,
  placeholder = null,
  onFilterInput,
  filterValue,
  icon = null,
}) => (
  <InputLabel>
    <span>
      {icon()}
      {name}
    </span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onFilterInput}
      value={filterValue}
    />
  </InputLabel>
);
