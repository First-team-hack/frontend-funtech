import globalTheme from '../../../themes/globalTheme';
import CustomButton from '../../CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from '../../CustomInput/CustomInput';
import { FormControl } from '@mui/material';

const schema = yup.object().shape({
  email: yup.string().email('Неверный формат email').required('Введите email'),
});

function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    clearErrors,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert(`Теперь ${data.email} подписан на рассылку`);
    resetField('email');
  };

  return (
    <div
      style={{
        width: '513px',
        height: '430px',
        padding: '146px 20px 20px 80px',
        borderRadius: '60px',
        boxSizing: 'border-box',
        fontSize: '20px',
        lineHeight: '40px',
        fontFamily: `'YS Text', 'Arial', sans-serif`,
        backgroundColor: globalTheme.palette.colorFooterBackground,
      }}
    >
      <p style={{ fontWeight: '400', margin: '0 0 20px' }}>
        <span style={{ fontWeight: '500' }}>Рассылка &#32;</span>
        Яндекс Ивентс:
        <br />
        главные события недели — &#32;
        <span style={{ fontWeight: '500' }}>у вас на почте</span>
      </p>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'row', gap: '2px' }}
      >
        <CustomInput
          className="input"
          {...register('email')}
          inputProps={{ onBlur: () => clearErrors('email') }}
          errormessage={errors.email?.message}
          placeholder="Ваша почта"
          sx={{
            width: '237px',
            height: '60px',
            borderRadius: '8px',
            fontSize: '20px',
          }}
          sxerror={{ fontSize: '20px' }}
        ></CustomInput>
        <CustomButton
          sx={{
            width: '176px',
            height: '60px',
            borderRadius: '8px',
            fontSize: '20px',
            fontWeight: '400',
          }}
          type="submit"
        >
          Подписаться
        </CustomButton>
      </FormControl>
    </div>
  );
}

export default Subscribe;
