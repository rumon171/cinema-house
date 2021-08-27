import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import './Catalog.scss';
  
  const ScrollTop = (props: any) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (pressedElement: any) => {
      
      const anchor = (pressedElement.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div 
          onClick={({ target }) => handleClick(target)} 
          role="presentation" 
          className="scrollTop"
        >
          {children}
        </div>
      </Zoom>
    );
  }
// const handleClick = (event: any) => {
// onClick={handleClick} 
  export default ScrollTop;