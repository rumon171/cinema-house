import React, { useEffect, useState } from 'react';
import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
import './Pages.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSelectedMovie } from '../../actions';
import { movieIdFromUrl } from '../../utilities/common';

const MoviePage: React.FC = () => {
  const [locationKeys, setLocationKeys] = useState<(string | undefined)[]>([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        if (location.key) setLocationKeys([location.key]);

        console.log('history.action === PUSH, location.key ', location.key);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          // Handle forward event
          setLocationKeys(([...keys]) => keys);
          dispatch(changeSelectedMovie( movieIdFromUrl() ));
        } else {
          // Handle back event
          setLocationKeys((keys) => [location.key, ...keys]);
          dispatch(changeSelectedMovie( movieIdFromUrl() ));
        }
      }
    });
  }, [locationKeys]);

  return (
    <>
      <Topbar></Topbar>
      <MovieContent></MovieContent>
    </>
  );
};

export default MoviePage;
