import { InputLabel } from './Input.styled';

export const Input = ({
  type,
  name,
  placeholder = null,
  onFilterInput,
  filterValue,
  minLength = null,
  icon = null,
}) => (
  <InputLabel>
    <span>
      {icon && icon()}
      {name}
    </span>
    <input
      type={type}
      name={name}
      minLength={minLength}
      placeholder={placeholder}
      onChange={onFilterInput}
      value={filterValue}
    />
  </InputLabel>
);
