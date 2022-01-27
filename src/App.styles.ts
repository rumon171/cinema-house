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
  },
  // cardDetails: {
  //   visibility: 'hidden',
  //   color: '#fff',
  // },
  // cardContainer: {
  //   position: 'relative',
  //   overflow: 'hidden',
  //   textAlign: 'center',
  // },
  // cardPoster: {
  //   '&hover': {
  //     opacity: 0.3,
  //     filter: 'alpha(opacity=30)',
  //   },
  // },

  // favIcon: {
  //   position: 'absolute',
  //   top: 10,
  //   width: '100%',
  //   transition: 'transform 750ms',
  // },
  // voteAverage: {
  //   position: 'absolute',
  //   bottom: 10,
  //   width: '100%',
  //   transition: 'transform 750ms',
  // },
}));
