import React from 'react';
import Introduction from './introduction';
import LanguageSwitcher from './language-switcher';

export default class IntlPracticeContainer extends React.Component {
  render() {
    return (
      <div>
        <LanguageSwitcher />
        <Introduction />
      </div>
    );
  }
}