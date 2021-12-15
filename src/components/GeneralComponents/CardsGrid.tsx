import { Grid } from '@material-ui/core';
import { Movie } from "../../services/movies.service";
import CardElement from './CardElement';
interface Props {
  similarMovies: Movie[];
}

const CardsGrid: React.FC<Props> = (
  {
    similarMovies,
  }: Props) =>{

  const cards = similarMovies;

  return (
    <Grid container className="container-content">
    { 
      cards.length > 0 &&
        cards.filter(card => card.vote_average !== 0).map((card) => (
          <CardElement card={card} />
        ))
    }
    </Grid>
  );
}

export default CardsGrid;