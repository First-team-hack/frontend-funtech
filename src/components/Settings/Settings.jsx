import './Settings.css';
import CustomSelect from '../CustomSelect/CustomSelect';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import { useForm } from 'react-hook-form';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../utils/constants';
import { useState } from 'react';

const interests = ['Frontend', 'Backend', 'IOS', 'Android', 'UI/UX дизайн'];

const settingsShema = yup.object({
  firstName: yup
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .required('Заполните это поле'),
  lastName: yup
    .string()
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .required('Заполните это поле'),
  email: yup.string().email('Введен некорректный email адрес').required('Заполните это поле'),
  phoneNumber: yup
    .string()
    .length(10, 'Номер телефона должен состоять из 10 цифр')
    .matches(/^\d+$/, 'Номер телефона может содержать только цифры'),
  interest: yup.string().oneOf(interests, 'Заполните это поле'),
});

function Settings() {
  const navigate = useNavigate();
  const { userInfo, updateUserInfo } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phoneNumber: userInfo.phoneNumber,
      telegram: userInfo.telegram,
      whatsapp: userInfo.whatsapp,
      vk: userInfo.vk,
      viber: userInfo.viber,
    },
    resolver: yupResolver(settingsShema),
  });

  const [selectState, setSelectState] = useState(userInfo.interest);
  const handleSelectChange = (e) => {
    setSelectState(e.target.value);
  };

  const [checkboxState, setCheckboxState] = useState({
    notificationByTelegram: userInfo.notificationByTelegram,
    notificationByWhatsapp: userInfo.notificationByWhatsapp,
    notificationByVk: userInfo.notificationByVk,
    notificationByViber: userInfo.notificationByViber,
  });

  const handleCheckboxChange = (e) => {
    setCheckboxState({
      ...checkboxState,
      [e.target.name]: e.target.checked,
    });
  };

  const onSubmit = (data) => {
    updateUserInfo(data);
  };

  const onCancelClick = () => {
    reset();
    navigate(PROFILE_ROUTE);
  };

  return (
    <section className="settings">
      <form className="settings__form" action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="settings__fieldset-container">
          <fieldset className="settings__fieldset">
            <legend className="settings__legend">Личные данные</legend>
            <div className="settings__input-grid">
              <Input
                id="firstName"
                label="Имя"
                required
                {...register('firstName')}
                error={errors.firstName?.message}
              />
              <Input
                id="email"
                label="Почта"
                required
                {...register('email')}
                error={errors.email?.message}
              />
              <Input
                id="lastName"
                label="Фамилия"
                required
                {...register('lastName')}
                error={errors.lastName?.message}
              />
              <Input
                id="phoneNumber"
                label="Телефон"
                type="tel"
                {...register('phoneNumber')}
                error={errors.phoneNumber?.message}
              />
              <CustomSelect
                id="interest"
                required
                errormessage={errors.interest?.message}
                defaultValue={userInfo.interest}
                label="Направление"
                sx={{ width: '305px' }}
                {...register('interest')}
                items={interests}
                value={selectState}
                onChange={handleSelectChange}
              />
            </div>
          </fieldset>
          <fieldset className="settings__fieldset">
            <legend className="settings__legend">Способ получения уведомлений</legend>
            <div className="settings__input-grid">
              <div className="settings__input-box">
                <CustomCheckbox
                  {...register('notificationByTelegram')}
                  checked={checkboxState.notificationByTelegram}
                  onChange={handleCheckboxChange}
                />
                <Input id="telegram" label="Telegram" {...register('telegram')}></Input>
              </div>
              <div className="settings__input-box">
                <CustomCheckbox
                  {...register('notificationByWhatsapp')}
                  checked={checkboxState.notificationByWhatsapp}
                  onChange={handleCheckboxChange}
                />
                <Input id="whatsapp" label="WhatsApp" {...register('whatsapp')}></Input>
              </div>
              <div className="settings__input-box">
                <CustomCheckbox
                  {...register('notificationByVk')}
                  checked={checkboxState.notificationByVk}
                  onChange={handleCheckboxChange}
                />
                <Input id="vk" label="Vkontakte" {...register('vk')}></Input>
              </div>
              <div className="settings__input-box">
                <CustomCheckbox
                  {...register('notificationByViber')}
                  checked={checkboxState.notificationByViber}
                  onChange={handleCheckboxChange}
                />
                <Input id="viber" label="Viber" {...register('viber')}></Input>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="settings__actions">
          <CustomButton
            aria-label="Сохранить"
            title="Сохранить"
            type="submit"
            sx={{ width: '250px', height: '50px', borderRadius: '20px', fontSize: '16px' }}
          >
            Сохранить
          </CustomButton>
          <CustomButton
            aria-label="Отмена"
            title="Отмена"
            type="button"
            variant="outlined"
            onClick={onCancelClick}
            sx={{ width: '250px', height: '50px', borderRadius: '20px', fontSize: '16px' }}
          >
            Назад
          </CustomButton>
        </div>
      </form>
    </section>
  );
}

export default Settings;
