import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry, hideModal, selectSelectedLocale } from '../../store/slices/countrySlice';
import { getLocalizedText } from '../../utils/localization';
import './countrySelectionModal.css';

const CountrySelectionModal = () => {
  const dispatch = useDispatch();
  const currentLocale = useSelector(selectSelectedLocale) || 'en-US';

  const handleCountrySelect = (country) => {
    dispatch(selectCountry(country));
  };

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <div className="country-modal-overlay">
      <div className="country-modal">
        <button className="modal-close-btn" onClick={handleClose}>
          ×
        </button>
        <div className="country-options">
          <div className="country-option">
            <div className="country-logo">
              <h4 className="logo-text">Fazil Construction</h4>
            </div>
            <div className="modal-country-flag">
              <img 
                src="https://flagcdn.com/w80/gb.png" 
                alt="UK Flag" 
                className="modal-flag-image"
              />
            </div>
            <p className="country-description">
              If you are looking for candidates in the UK or a new job, please 
              take a look at our UK website. We {getLocalizedText('organize', 'en-GB')} 
              {getLocalizedText('specializations', 'en-GB')} in construction.
            </p>
            <button 
              className="country-btn uk-btn"
              onClick={() => handleCountrySelect('UK')}
            >
              Fazil Construction UK
            </button>
          </div>
          
          <div className="country-divider"></div>
          
          <div className="country-option">
            <div className="country-logo">
              <h4 className="logo-text">Fazil Construction</h4>
            </div>
            <div className="modal-country-flag">
              <img 
                src="https://flagcdn.com/w80/us.png" 
                alt="US Flag" 
                className="modal-flag-image"
              />
            </div>
            <p className="country-description">
              For our US clients and candidates, please click here and take a 
              look at the latest vacancies we have. We {getLocalizedText('organize', 'en-US')} 
              {getLocalizedText('specializations', 'en-US')} in construction.
            </p>
            <button 
              className="country-btn us-btn"
              onClick={() => handleCountrySelect('US')}
            >
              Fazil Construction US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySelectionModal;