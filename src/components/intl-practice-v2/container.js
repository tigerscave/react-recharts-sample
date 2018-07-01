import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

import { en_US, ja_JP } from '../../languages';
addLocaleData([...en, ...ja]);

import LanguageSelector from './language-selector';

const languageDictionaries = {
  en: en_US,
  ja: ja_JP
}


export default class IntlPracticeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageCode: 'en'  //en or ja
    }

    this.onSelectChanged = e => {
      this.setState({
        languageCode: e.target.value
      })
    }
  }

  render() {
    const { languageCode } = this.state;
    const messages = languageDictionaries[languageCode];
    console.log(languageCode);
    return (
      <IntlProvider
        key={languageCode}
        locale={languageCode}
        messages={messages}
        >
        <div>
          <LanguageSelector
            onSelectChanged={this.onSelectChanged}
            languageCode={languageCode} />
          <FormattedMessage
            id="hello" />
        </div>
      </IntlProvider>
    );
  }
}