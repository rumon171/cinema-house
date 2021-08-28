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
  
<<<<<<< HEAD
    const handleClick = (clickedEl: React.MouseEvent<HTMLElement>) => {
      const target = clickedEl.target as HTMLInputElement;
      const anchor = (target.ownerDocument || document).querySelector('#back-to-top-anchor');
=======
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
      const pressedElement  = event.target as HTMLTextAreaElement;
      const anchor = (pressedElement.ownerDocument || document).querySelector('#back-to-top-anchor');
>>>>>>> smallfixes
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div 
          onClick={handleClick} 
          role="presentation" 
          className="scrollTop"
        >
          {children}
        </div>
      </Zoom>
    );
  }

  export default ScrollTop;