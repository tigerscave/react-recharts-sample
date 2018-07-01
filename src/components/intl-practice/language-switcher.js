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
        <select 
          onChange={(event) => selectLanguageClicked(event)} 
          value={value}>
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    </div>
  );
}

export default LanguageSwitcher;