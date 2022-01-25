import React from 'react';
import CatalogCards from './CatalogCards';
import ScrollTop from '../Catalog/ScrollTop';
import { Toolbar, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Router } from 'react-router-dom';

const Catalog: React.FunctionComponent = (props: any) => {
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <CatalogCards></CatalogCards>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Catalog;
