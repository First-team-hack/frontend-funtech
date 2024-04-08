import { Box, Stack, Link, Typography } from '@mui/material';
import globalTheme from '../../../themes/globalTheme';

function AboutUs() {
  const fontStyles = {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24px',
    textDecoration: 'none',
    color: globalTheme.palette.colorCardHoverButtonHover,
    transition: 'all easy-in-out 0.15s',
  };

  const linkStates = () => ({
    '&:hover': {
      opacity: 0.7,
    },
  });
  return (
    <Box
      sx={{
        width: '927px',
        height: '430px',
        boxSizing: 'border-box',
        padding: '85px 70px 10px 90px',
        borderRadius: '60px',
        backgroundColor: globalTheme.palette.colorFooterBackground,
      }}
    >
      <Stack
        direction="row"
        spacing="50px"
        useFlexGap
        sx={{ marginBottom: '175px', width: '100%' }}
      >
        <Link
          className="link"
          href="https://yandex.ru/company/"
          sx={[{ ...fontStyles }, linkStates]}
          target="_blank"
          rel="noreferrer"
        >
          О компании
        </Link>
        <Link
          className="link"
          href="https://yandex.ru/dev/feedback/?from=main&ysclid=lur2vwndk0362983331"
          sx={[{ ...fontStyles }, linkStates]}
          target="_blank"
          rel="noreferrer"
        >
          Обратная связь
        </Link>
        <Link
          className="link"
          href="https://yandex.ru/support/common/?ysclid=lur2xx1jvf293354773"
          sx={[{ ...fontStyles }, linkStates]}
          target="_blank"
          rel="noreferrer"
        >
          Часто задаваемые вопросы
        </Link>
      </Stack>
      <Typography sx={{ ...fontStyles, fontWeight: '400', marginBottom: '20px' }}>
        На информационном ресурсе применяются рекомендательные технологии в соответствии с Правилами
      </Typography>
      <Typography sx={{ ...fontStyles, fontWeight: '400' }}>
        {`© 1999–${new Date().getFullYear()} ООО «Компания Яндекс Ивентс». Все права защищены. Для лиц
        старше 18 лет. `}
        <Link
          className="link"
          href="https://yandex.ru/legal/rules/"
          sx={[{ ...fontStyles, fontWeight: '400' }, linkStates]}
          target="_blank"
          rel="noreferrer"
        >
          Пользовательское соглашение
        </Link>
        {', '}
        <Link
          className="link"
          href="https://yandex.ru/legal/confidential/"
          sx={[{ ...fontStyles, fontWeight: '400' }, linkStates]}
          target="_blank"
          rel="noreferrer"
        >
          Политика конфиденциальности
        </Link>
      </Typography>
    </Box>
  );
}

export default AboutUs;
