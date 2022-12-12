import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Form = ({ controls, initialValues, onSubmit, buttonName, ...style }) => {

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: event.target.type === 'number' ?  parseInt(value) : value, 
    })
  }

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues])

  const onSubmitForm = (event) => {
    event.preventDefault()
    onSubmit(values);
  }
  return (
    <Box
      component="form"
      onSubmit={onSubmitForm}
      sx={{
        '@media (max-width: 600px)': {
          paddingLeft: 0
        },
        width: '100%',
        '& > :not(style)': { m: 1, maxWidth: '600px', }, ...style,
      }}
      autoComplete="off"
    >
      <Stack spacing={3}>
        {controls && controls.map((formInput) => {
          return (
              <TextField
                key={formInput.name}
                id="standard-basic"
                onChange={handleInputChange}
                value={values[formInput.name]}
                label={formInput.label}
                variant="standard"
                required={formInput.required}
                name={formInput.name}
                type={formInput.type}
                InputProps={{
                  readOnly: formInput.readOnly,
                }}
              />
          )
        })}
      </Stack>
      <Box>
        <Button type="submit" variant="contained">{buttonName}</Button>
      </Box>
    </Box>

  )
}
export default Form;