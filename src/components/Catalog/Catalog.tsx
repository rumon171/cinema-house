import{ useEffect } from "react";
import{ useContext } from "react";
import { MoviesContext } from "../../services/context";
import CatalogCards from './CatalogCards';
import ScrollTop from '../Catalog/ScrollTop';
import { Toolbar, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Catalog = (props: any) => {

  const { isFetching, setIsFetching } = useContext(MoviesContext);  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
    console.log('Fetch more list items!');
  }

  return (
    <>
        <Toolbar id="back-to-top-anchor" />
        <CatalogCards></CatalogCards>
        <ScrollTop {...props}>
            <Fab 
                color="secondary" 
                size="small" 
                aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    </>
  );
}

export default Catalog;