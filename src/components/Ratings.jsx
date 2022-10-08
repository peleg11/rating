import { Button } from './Button';
import { RatingsWrapper } from './style';
export const Ratings = props => {
  return (
    <RatingsWrapper>
      <Button onClick={props.handleClick} highlight={props.highlight === '1'}>
        1
      </Button>
      <Button onClick={props.handleClick} highlight={props.highlight === '2'}>
        2
      </Button>
      <Button onClick={props.handleClick} highlight={props.highlight === '3'}>
        3
      </Button>
      <Button onClick={props.handleClick} highlight={props.highlight === '4'}>
        4
      </Button>
      <Button onClick={props.handleClick} highlight={props.highlight === '5'}>
        5
      </Button>
    </RatingsWrapper>
  );
};
