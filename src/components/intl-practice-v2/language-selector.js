import React from 'react';

const LanguageSelector = (props) => {
  const {
    languageCode,
    onSelectChanged } = props;
  console.warn(languageCode);
  return (
    <div>
      <select
        defaultValue={languageCode}
        onChange={onSelectChanged}>
        <option value='en'>English</option>
        <option value='ja'>Japanese</option>
      </select>
    </div>
  );
};

export default LanguageSelector;