import React from 'react';
import './Input.css';

/**
 *  This wrapper component for native input with custom design.
 * @param {string} label text above input element
 * @param {string} error error text under input element
 * @param {boolean} textarea boolean, if true input became textarea
 * @param {string} type type = 'tel' add telephon country code on input left side, type='search' add search icon on input left side
 * @param {string} countryCode string, telephon country code
 * @param {object} props the rest of the props are the same as in the native input
 *
 * You can ovveride input styles with css by using id selector
 */

const Input = React.forwardRef(
  ({ label, error, textarea, countryCode = '+7', required, ...props }, ref) => {
    return (
      <div className="input">
        {label && (
          <label className="input__label" htmlFor={props.id}>
            {required && <span className="input__label input__label_required">*</span>}
            {label}
          </label>
        )}
        {textarea ? (
          <textarea
            className={'input__textarea' + (error ? ' input__input_style_error' : '')}
            {...props}
          />
        ) : (
          <div className="input__input-wrapper">
            <input
              required={required}
              ref={ref}
              className={
                'input__input' +
                (error ? ' input__input_style_error' : '') +
                (props.type === 'tel' ? ' input__input_type_tel' : '') +
                (props.type === 'search' ? ' input__input_type_search' : '')
              }
              {...props}
            />
            {props.type === 'tel' && <span className="input__country-code">{countryCode}</span>}
            {props.type === 'search' && <span className="input__search-icon" />}
          </div>
        )}
        {error && <span className="input__error">{error}</span>}
      </div>
    );
  }
);

export default Input;
