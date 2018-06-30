import React from 'react';

const LanguageSwitcher = ({
  selectLanguageClicked,
}) => {
  return (
    <div>
      <h3>LanguageSwitcher</h3>
      <p>
        <span>User : Rahmat</span>
      </p>
      <div>
        <select>
          <option onClick={() => selectLanguageClicked('en')}>English</option>
          <option onClick={() => selectLanguageClicked('cn')}>Chinese</option>
          <option onClick={() => selectLanguageClicked('jp')}>Japanese</option>
        </select>
      </div>
    </div>
  );
}

export default LanguageSwitcher;