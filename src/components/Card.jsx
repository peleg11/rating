import { Button } from './Button';
import { useState } from 'react';
import { ReactComponent as Star } from '../images/icon-star.svg';
import { ReactComponent as Thanks } from '../images/illustration-thank-you.svg';

import { TextBox, Submit, CardWrapper, Selected } from './style';
import { Ratings } from './Ratings';
export const Card = props => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = event => {
    setCurrentNumber(event.target.textContent);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return !isSubmitted ? (
    <CardWrapper>
      <div>
        <Button static>
          <Star />
        </Button>
      </div>
      <TextBox>
        <h2>How did we do?</h2>
        <div>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
      </TextBox>
      <Ratings handleClick={handleClick} highlight={currentNumber} />
      <Submit disabled={currentNumber === '0'} onClick={handleSubmit}>
        submit
      </Submit>
    </CardWrapper>
  ) : (
    <CardWrapper center>
      <Thanks />
      <Selected>You selected {currentNumber} out of 5</Selected>
      <TextBox center>
        <h1>Thank you!</h1>
        <div>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </div>
      </TextBox>
    </CardWrapper>
  );
};
