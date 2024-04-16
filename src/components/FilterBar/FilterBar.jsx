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
import useEvent from '../../providers/EventProvider/EventProvider.hook';
import { useState } from 'react';

function FilterBar() {
  const { getFilteredEvents } = useEvent();
  const defaultValues = {
    keyword: '',
    theme: '',
    city: '',
    sortBy: '',
    format: '',
  };
  const [filters, setFilters] = useState(defaultValues);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setFilters(defaultValues);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getFilteredEvents(filters);
  };

  return (
    <Box component="form" sx={{ marginBottom: '28px' }} onSubmit={onSubmit} action="#" noValidate>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }} useFlexGap>
        <Input
          type="search"
          placeholder="Поиск"
          name="keyword"
          value={filters['keyword']}
          onChange={handleChange}
        />
        <CustomSelect
          placeholder="Темы"
          sx={{ width: '180px' }}
          items={THEMES_AND_INTERESTS}
          name="theme"
          value={filters['theme']}
          onChange={handleChange}
        />
        <CustomSelect
          placeholder="Город"
          sx={{ width: '180px' }}
          items={EVENT_CITES}
          name="city"
          value={filters['city']}
          onChange={handleChange}
        />
        <CustomSelect
          placeholder="Сортировать"
          sx={{ width: '180px' }}
          name="sortBy"
          value={filters['sortBy']}
          onChange={handleChange}
        >
          {EVENTS_SORT_BY.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomSelect
          placeholder="Формат"
          sx={{ width: '180px' }}
          name="format"
          value={filters['format']}
          onChange={handleChange}
        >
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
            variant="outlined"
            sx={{ width: '105px', height: '40px', borderRadius: '20px', textTransform: 'none' }}
            onClick={reset}
          >
            Сбросить
          </CustomButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FilterBar;
