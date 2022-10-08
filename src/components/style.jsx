import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: hsl(215 25% 13%);
  width: 400px;
  height: 420px;
  border-radius: 30px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props => props.center && 'center'};
`;
export const ButtonWrapper = styled.button`
  background: ${props =>
    props.highlight ? 'hsl(25, 97%, 53%);' : 'hsl(213, 19%, 18%);'}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${props =>
    props.highlight ? 'hsl(0, 0%, 100%)' : 'hsl(216, 12%, 54%)'};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.highlight ? '1' : '0.7')};
  font-weight: 700;
  font-size: 16px;
  ${props => (props.static ? '' : 'cursor:pointer')};
  ${props =>
    !props.static && !props.highlight
      ? `&:hover{
        background:hsl(217, 12%, 63%);
        color:hsl(0, 0%, 100%);
        opacity:1;
      }`
      : ''};
  
  
`;
export const TextBox = styled.div`
  color: hsl(217, 12%, 63%);
  font-size: 15px;
  line-height: 1.5;
  h1,
  h2 {
    color: hsl(0, 0%, 100%);
    font-weight: 700;
  }
  ${props => props.center && 'text-align:center'}
`;
export const RatingsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Submit = styled('button').attrs({ type: 'sybmit' })`
  width: 100%;
  height: 50px;
  background: hsl(25, 97%, 53%);
  border: none;
  border-radius: 32px;
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2rem;
  cursor: pointer;

  &:hover {
    background: hsl(0, 0%, 100%);
    color: hsl(25, 97%, 53%);
  }
`;

export const Selected = styled.div`
  background: hsl(213, 19%, 18%);
  color: hsl(25, 97%, 53%);
  opacity: 0.7;
  text-align: center;
  border-radius: 30px;
  padding: 6px 14px;
  font-weight: 700;
`;
