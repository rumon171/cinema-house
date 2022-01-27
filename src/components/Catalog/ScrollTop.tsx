import React, { ReactNode } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import useStyles from './Catalog.styles';
interface ScrollTopProps {
  children: ReactNode;
  window: any;
}

const ScrollTop: React.FC<ScrollTopProps> = ({
  children,
  window,
}: ScrollTopProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const classes = useStyles();

  const handleClick = (clickedEl: React.MouseEvent<HTMLElement>) => {
    const target = clickedEl.target as HTMLInputElement;
    const anchor = (target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );


    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollTop}>
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
