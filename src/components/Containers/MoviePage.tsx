import React, { useEffect, useState } from 'react';
import Topbar from '../Header/Topbar';
import MovieContent from './MovieContent';
import './Containers.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSelectedMovie } from '../../actions';
import { movieIdFromUrl } from '../../utilities/common';

const MoviePage: React.FC = () => {
  const [locationKeys, setLocationKeys] = useState<(string | undefined)[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   return navigate.listen((location) => {
  //     if (navigate.action === 'POP') {
  //       if (locationKeys[1] === location.key) {
  //         // Handle forward event
  //         setLocationKeys(([...keys]) => keys);
  //         dispatch(changeSelectedMovie( movieIdFromUrl() ));
  //       } else {
  //         // Handle back event
  //         setLocationKeys((keys) => [location.key, ...keys]);
  //         dispatch(changeSelectedMovie( movieIdFromUrl() ));
  //       }
  //     }
  //   });
  // }, [locationKeys]);

  return (
    <>
      <Topbar></Topbar>
      <MovieContent></MovieContent>
    </>
  );
};

export default MoviePage;
