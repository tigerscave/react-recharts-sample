import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'; 
import ja from 'react-intl/locale-data/ja'; 
import zh from 'react-intl/locale-data/zh'; 

import { en_US, ja_JP, zh_CN } from '../../languages2'; 
addLocaleData([...en, ...ja, ...zh]); 

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
      language: 'en',
    }
  }
  componentDidMount = () => {
    console.log("hello did mount")
    this.setState({
      language: window.navigator.languages[0],
    })
    console.warn(window.navigator.languages);
  }

  render() {
    const { language } = this.state;
    const messages =
      languageDictionaries[language]

    return (
      <IntlProvider
        key={language}
        locale={language}
        messages={messages} 
      >
        <div>
          <IntroductionContent />
        </div>
      </IntlProvider>
    );
  }
}