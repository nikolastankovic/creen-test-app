import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const  Info = ({data}) => {
  const labelStyle = {
    flexGrow: 1,
    alignSelf: 'flex-end',
    textAlign: 'left',
    justifySelf: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    color: 'gray',
    width: '50px',
  }
  const valueStyle = {
    flexGrow: 1,
    alignSelf: 'flex-start',
    textAlign: 'left',
    justifySelf: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    color: 'gray',
    width: '150px',
  }
  const gridItemStyle = {
    justifyContent: 'space-between',
    display: 'flex',
    paddingTop: 1,
    paddingBottom: 1,
    
  }
  const labelFontWeight = 500;
  const valueFontWeight = 400;
  
  return (
    <Grid  data-testid="info" fluid rowSpacing={3} columnSpacing={{ xs: 5, sm: 5, md: 5 }} sx={{ paddingTop: 1, paddingBottom: 1 }}>
      <Grid item xs={6} sx={gridItemStyle}>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            fontWeight={400}
            sx={labelStyle}>
            Info
          </Typography>
        </Grid>

        <Grid item xs={6} sx={gridItemStyle}>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={labelFontWeight}
            sx={labelStyle}>
            Title
          </Typography>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={valueFontWeight}
            sx={valueStyle}>
            {data.title}
          </Typography>
        </Grid>

        <Grid item xs={6} sx={gridItemStyle}>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={labelFontWeight}
            sx={labelStyle}>
            Author
          </Typography>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={valueFontWeight}
            sx={valueStyle}>
            {data.nameOfAuthor}
          </Typography>
        </Grid>

        <Grid item xs={6} sx={gridItemStyle}>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={labelFontWeight}
            sx={labelStyle}>
            Year
          </Typography>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={valueFontWeight}
            sx={valueStyle}>
            {data.yearOfBublishing}
          </Typography>
        </Grid>

        <Grid item xs={6} sx={gridItemStyle}>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={labelFontWeight}
            sx={labelStyle}>
            Quantity
          </Typography>
          <Typography
            variant="h8"
            noWrap
            component="div"
            fontWeight={valueFontWeight}
            sx={valueStyle}>
            {data.quantity}
          </Typography>
      </Grid>
  </Grid>
  )
}

export default Info;