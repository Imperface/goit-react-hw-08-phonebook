// import styled component
import { ButtonWrapper } from './Button.styled';

export const Button = ({
  text,
  type,
  deleteContact = null,
  isLoading,
  icon = null,
}) => {
  console.log(isLoading);
  return (
    <ButtonWrapper disabled={isLoading} type={type} onClick={deleteContact}>
      <span>
        {icon && icon()}
        {text}
      </span>
    </ButtonWrapper>
  );
};
