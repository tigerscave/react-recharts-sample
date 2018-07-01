import React from 'react';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'

import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja'; 

import { en_US, ja_JP } from '../../languages2'; 
addLocaleData([...en, ...ja]);

import LanguageSwitcher from './language-switcher';

const languageDictionaries = {
  en: en_US, 
  ja: ja_JP,
}; 

export default class IntlPracticeContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      value: 'en',  // cn / jp
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
      </IntlProvider>
    );
  }
}