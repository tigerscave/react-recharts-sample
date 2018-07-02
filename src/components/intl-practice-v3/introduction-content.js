import React from 'react';
import { FormattedMessage } from 'react-intl'

const IntroductionContent = () => {
  return (
    <div>
      <div>
        <FormattedMessage 
          id="title" />
      </div>
      <div>
        <FormattedMessage 
          id="name" />
      </div>
      <div>
        <FormattedMessage 
          id="from" />
      </div>
      <div><FormattedMessage 
        id="food" /></div>
    </div>
  );
}

export default IntroductionContent;