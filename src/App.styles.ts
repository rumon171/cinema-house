import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    // TODO: create vars in mui styles, use theme var
    // $base-color: #aa2876;
    // $font-base-color: #fff;
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
  typographyBase: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeight: 400,
  },
}));
