import { Box, MenuItem, Stack } from '@mui/material';
import Input from '../Input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomButton from '../CustomButton/CustomButton';

function FilterBar() {
  // mock data start
  const eventThemes = ['Frontend', 'Backend', 'Техно', 'Вышивание крестиком'];
  const cities = ['Москва', 'Владивосток', 'Санкт-Петербург'];
  const eventType = ['Онлайн', 'Оффлайн', 'Онлайн и Оффлайн'];
  const sortBy = [
    { name: 'По дате', value: 'date' },
    { name: 'По названию', value: 'name' },
  ];
  // mock data end
  return (
    <Box component="form">
      <Stack direction="row" sx={{ justifyContent: 'space-between' }} useFlexGap>
        <Input type="search" placeholder="Поиск" />
        <CustomSelect placeholder="Темы" sx={{ width: '180px' }} items={eventThemes} />
        <CustomSelect placeholder="Город" sx={{ width: '180px' }} items={cities} />
        <CustomSelect placeholder="Сортировать" sx={{ width: '180px' }}>
          {sortBy.map((item) => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </CustomSelect>

        <CustomSelect placeholder="Тип" sx={{ width: '180px' }} items={eventType} />
        <Stack direction="row" spacing={'6px'} useFlexGap>
          <CustomButton
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
            disabled
            variant="outlined"
            sx={{ width: '105px', height: '40px', borderRadius: '20px', textTransform: 'none' }}
          >
            Сбросить
          </CustomButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FilterBar;
