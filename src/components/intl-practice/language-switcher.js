import React from 'react';

const LanguageSwitcher = ({
  selectLanguageClicked,
  value
}) => {
  return (
    <div>
      <h3>LanguageSwitcher</h3>
      <p>
        <span>User : Rahmat</span>
      </p>
      <div>
        <select onChange={(event) => selectLanguageClicked(event)} value={value}>
          <option value="English">English</option>
          <option value="Chinese">Chinese</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>
    </div>
  );
}

export default LanguageSwitcher;