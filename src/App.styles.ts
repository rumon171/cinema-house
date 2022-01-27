import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: '#272838',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  containerMoviePage: {
    marginTop: '100px',
  },
  typographyBase: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeight: 400,
  },
  title: {
    fontSize: '2.3rem',
    fontWeight: 400,
    letterSpacing: '0.03em',
    marginTop: 0,
  },
  loadingSpinner: {
    maxWidth: '70px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  noResultsMessage: {
    textAlign: 'center',
  },
}));
