import { ButtonWrapper } from './style';

export const Button = props => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};
