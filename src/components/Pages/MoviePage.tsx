import React, { useContext } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { MoviesContext } from "../../services/context";

const MoviePage = (props: any) => {
  const { movies } = useContext(MoviesContext);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar >
          <Typography variant="h6">Movies PAGE</Typography>
          <OutlinedInput color="secondary" defaultValue="Search"/>
        </Toolbar>
            <Card>
               <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Poster of "
                  height="140"
                 // image={movie.picture}
                 // title={movie.title}
                />
              </CardActionArea>
              <CardActions>
                 fdgdg
              </CardActions>
            </Card>
      </AppBar>
    </React.Fragment>
  );
}

export default MoviePage;