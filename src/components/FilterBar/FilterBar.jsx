import { Box, MenuItem, Stack } from '@mui/material';
import Input from '../Input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomButton from '../CustomButton/CustomButton';
import {
  THEMES_AND_INTERESTS,
  EVENT_CITES,
  EVENT_FORMATS,
  EVENTS_SORT_BY,
} from '../../utils/constants';
import { useForm } from 'react-hook-form';
import useEvent from '../../providers/EventProvider/EventProvider.hook';

function FilterBar() {
  const { getFilteredEvents } = useEvent();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm({
    defaultValues: {
      keyword: '',
      theme: '',
      city: '',
      sortBy: '',
      format: '',
    },
  });
  const onSubmit = (filters) => {
    getFilteredEvents(filters);
  };

  return (
    <Box
      component="form"
      sx={{ marginBottom: '28px' }}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
      noValidate
    >
      <Stack direction="row" sx={{ justifyContent: 'space-between' }} useFlexGap>
        <Input type="search" placeholder="Поиск" {...register('keyword')} />
        <CustomSelect
          {...register('theme')}
          placeholder="Темы"
          sx={{ width: '180px' }}
          items={THEMES_AND_INTERESTS}
        />
        <CustomSelect
          {...register('city')}
          placeholder="Город"
          sx={{ width: '180px' }}
          items={EVENT_CITES}
        />
        <CustomSelect {...register('sortBy')} placeholder="Сортировать" sx={{ width: '180px' }}>
          {EVENTS_SORT_BY.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomSelect {...register('format')} placeholder="Формат" sx={{ width: '180px' }}>
          {EVENT_FORMATS.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </CustomSelect>
        <Stack direction="row" spacing={'6px'} useFlexGap>
          <CustomButton
            type="submit"
            aria-label="Найти"
            title="Найти"
            sx={{
              width: '80px',
              height: '40px',
              borderRadius: '20px',
              textTransform: 'none',
            }}
          >
            Найти
          </CustomButton>
          <CustomButton
            type="button"
            aria-label="Сбросить фильтры"
            title="Сбросить фильтры"
            disabled={!isDirty}
            variant="outlined"
            sx={{ width: '105px', height: '40px', borderRadius: '20px', textTransform: 'none' }}
            onClick={() => reset()}
          >
            Сбросить
          </CustomButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FilterBar;
