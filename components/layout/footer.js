import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <footer className='footer'>
      <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          WEB3 REACT APP
        </Typography>
        <Typography component="p">
          @2022 All right reserved
        </Typography>
      </Paper>
    </footer>
  );
}

export default (Footer);
