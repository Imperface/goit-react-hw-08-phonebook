import { Loader } from 'components';
import { ButtonWrapper } from './Button.styled';

export const Button = ({
  text,
  type,
  isLoading = false,
  icon = null,
  callback = null,
}) => {
  return (
    <ButtonWrapper disabled={isLoading} type={type} onClick={callback}>
      <span>
        {icon && isLoading ? <Loader size={34} color="#000" /> : icon()}
        {text}
      </span>
    </ButtonWrapper>
  );
};
//
