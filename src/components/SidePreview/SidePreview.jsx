import Box from '@mui/material/Box';
import AppBar from '../AppBar/AppBar';
import Divider from '@mui/material/Divider';
import Info from './Info';
import { SideAppBar } from '../AppBar/SideAppBar';
import { Stack } from '@mui/system';

export const SidePreview = ({ data }) => {

  return (
    <Box data-testid="sidePreview" height="100vh" width="25%" display="flex" flexDirection="column" sx={{
      '@media (max-width: 780px)': {
        display: 'none'
      }
    }}>
      <AppBar>
        <SideAppBar data={data} />
      </AppBar>
      <Stack>
        <Box sx={{ 'img': { objectFit: 'contain' }, flex: 1, maxHeight: '400px', minHeight: '400px', backgroundColor: '#c9c9c96e' }}>
          {!data.coverPhoto && <span> No image </span>}
          {data.coverPhoto && <img src={data.coverPhoto} loading="lazy" width="100%" height="100%" />}
        </Box>
        <Box>
          <Divider />
          <Info data={data} />
          <Divider />
        </Box>
      </Stack>
    </Box>
  )
}
