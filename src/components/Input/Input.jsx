import './Input.css';

/**
 * Компонент Input, с лейблом и ошибками

 * @param {string} label string - текст лейбла
 * @param {string} error string - текст ошибки
 * @param {boolean} textarea boolean - если true превращается в многострокое поле ввода
 * @param {string} type string - при типе 'tel' в левой части инпута добавляется телефоный код страны
 * @param {string} countryCode string - телефоный код страны
 * @param {object} props остальные пропсы как и у обычного инпута
 * @returns
 */

function Input({ label, error, textarea, countryCode = '+7', ...props }) {
  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={props.id}>
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
            className={
              'input__input' +
              (error ? ' input__input_style_error' : '') +
              (props.type === 'tel' ? ' input__input_type_tel' : '')
            }
            {...props}
          />
          {props.type === 'tel' && <span className="input__country-code">{countryCode}</span>}
        </div>
      )}
      {error && <span className="input__error">{error}</span>}
    </div>
  );
}

export default Input;
