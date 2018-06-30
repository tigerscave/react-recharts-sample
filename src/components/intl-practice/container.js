import React from 'react';
import Introduction from './introduction';
import IntroductionJapanese from './introduction-jp';
import IntroductionChinese from './introduction-cn';

import LanguageSwitcher from './language-switcher';

export default class IntlPracticeContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      languageMode: 'en',  // cn / jp
    }

    this.selectLanguageClicked = languageMode => {
      this.setState({
        languageMode: languageMode,
      });
    };
  }
  render() {
    const { languageMode } = this.state;
    return (
      <div>
        <LanguageSwitcher
          selectLanguageClicked={this.selectLanguageClicked} />
        {languageMode ==='en' ? 
          <Introduction /> : null}
        {languageMode ==='jp' ? 
          <IntroductionJapanese /> : null}
        {languageMode ==='cn' ? 
          <IntroductionChinese /> : null}
      </div>
    );
  }
}