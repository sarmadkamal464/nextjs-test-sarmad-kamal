/*
 Please write a component that contains a toggle button.
 When clicking the button it should show or hide a text below the button.
 The title of the page should change between 'shown' and 'hidden'. Hint: the title can be set with document.title = 'some string'.

  You can view your results on http://localhost:3000/toggle
*/

import { Button, HorizontalLine, Paragraph } from '@styleGuide';
import { useState, useEffect } from 'react';

export const Toggle = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (isHidden) {
      document.title = 'hidden';
    } else {
      document.title = 'show';
    }
  }, [isHidden]);

  return (
    <div>
      <Button onClick={() => setIsHidden((pre) => !pre)}>Toggle Button</Button>
      <HorizontalLine />
      <Paragraph>{!isHidden && 'show and hide'}</Paragraph>
    </div>
  );
};
