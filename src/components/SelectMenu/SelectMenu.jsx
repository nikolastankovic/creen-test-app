import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({ onSelectChange, data, selected = 'Any author' }) => {
  return (
    <Box sx={{ minWidth: 100 }} data-testid="selectComponent">
      <FormControl fullWidth>
        <Select
          value={selected ? selected : 'Any author'}
          displayEmpty
          onChange={onSelectChange}
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
          sx={{
            maxHeight: 100,
            minWidth: 300,
            color: 'white',
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            "& .MuiFormLabel-root": { color: 'white' },
            "& .MuiInputLabel-outlined": { color: 'white' },
            "& .MuiSvgIcon-root": { color: "white" },
            "& .Mui-focused": { color: 'white' },
            "&:hover": {
              "&& fieldset": {
                borderColor: "white"
              }
            }
          }}
        >
          {data && data.map((item, index) => {
            return (
              <MenuItem key={'selectMenuItem' + index} value={item}>{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;