import React from "react";
import Topbar from '../Header/Topbar';
import Catalog from '../Catalog/Catalog';

const HomePage: React.FunctionComponent<any> = () => {
  return (
    <>
        <Topbar></Topbar>
        <Catalog></Catalog>
    </>
  );
}

export default HomePage;