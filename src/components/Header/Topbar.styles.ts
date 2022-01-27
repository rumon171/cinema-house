import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  topBar: {
    backgroundColor: '#aa2876',
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
    // '&Title': {
    //     fontSize: '1.5rem',
    //     fontWeight: 500,
    //   },
  },
  topBarTitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
}));
