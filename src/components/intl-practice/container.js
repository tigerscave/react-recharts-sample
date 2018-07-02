import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja'; 
import zh from 'react-intl/locale-data/zh'; 

import { en_US, ja_JP, zh_CN } from '../../languages2'; 
addLocaleData([...en, ...ja, ...zh]);

import LanguageSwitcher from './language-switcher';
import IntroductionContent from './introduction-content'; 

const languageDictionaries = {
  en: en_US, 
  ja: ja_JP,
  zh: zh_CN,
}; 

export default class IntlPracticeContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      value: 'en',  // ch / jp
    }

    this.selectLanguageClicked = (event) => {
      this.setState({
        value: event.target.value,
      });
    };
  }
  render() {
    const { value } = this.state;
    const messages = languageDictionaries[value]
    console.log(value);
    
    return (
      <IntlProvider 
        key={value} 
        locale={value}
        messages={messages} 
        >
        <div>
          <LanguageSwitcher
            selectLanguageClicked={this.selectLanguageClicked}
            value={value} />
          <IntroductionContent />
        </div>
      </IntlProvider>
    );
  }
}