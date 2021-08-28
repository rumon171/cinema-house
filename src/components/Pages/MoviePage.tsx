import { useEffect, useState } from "react";
import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
import './Pages.scss';
import { useHistory } from 'react-router-dom';

const MoviePage = () => {

  const [locationKeys, setLocationKeys] = useState<(string | undefined)[]>([]);
  let history = useHistory();


  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        if (location.key) setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          // Handle forward event
          console.log('forward button');
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);

          // Handle back event
          console.log('back button');
          //removeTask();
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationKeys]);

  return (
    <>
      <Topbar></Topbar>
      <MovieContent></MovieContent>
    </>
  );
}

export default MoviePage;