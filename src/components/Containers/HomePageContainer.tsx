import React from 'react';
import HeaderTopbar from '../Header/HeaderTopbar';
import HeaderMenu from '../Header/HeaderMenu';
import Catalog from '../Catalog/Catalog';

const HomePage: React.FC = () => {
    return (
        <>
            <HeaderTopbar></HeaderTopbar>
            <HeaderMenu></HeaderMenu>
            <Catalog></Catalog>
        </>
    );
};

export default HomePage;
