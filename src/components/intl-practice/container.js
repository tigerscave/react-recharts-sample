import React from 'react';
import Introduction from './introduction';
import IntroductionJapanese from './introduction-jp';
import IntroductionChinese from './introduction-cn';

import LanguageSwitcher from './language-switcher';

export default class IntlPracticeContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      value: 'English',  // cn / jp
    }

    this.selectLanguageClicked = (event) => {
      this.setState({
        value: event.target.value,
      });
    };
  }
  render() {
    const { value } = this.state;
    console.log(value);
    
    return (
      <div>
        <LanguageSwitcher
          selectLanguageClicked={this.selectLanguageClicked}
          value={value} />
        {value ==='English' ? 
          <Introduction /> : null}
        {value ==='Japanese' ? 
          <IntroductionJapanese /> : null}
        {value ==='Chinese' ? 
          <IntroductionChinese /> : null}
      </div>
    );
  }
}