import React from 'react';
import { GlobalStyle } from '../composants/NavFood/globalStyle';
import Hero from '../composants/HeroFoods'
import Products from '../composants/Products';
import {productData, productDataTwo} from '../composants/Products/data'
import Feature from '../composants/Feature';
import Footer from '../composants/Footer/index';


const PageRestauration = () => {
    return (
        <div>
            <GlobalStyle />
            <Hero />
            <Products heading = 'Choose your favorite' data = {productData}/>
            <Feature />
            <Products heading = 'Make your choice' data = {productDataTwo}/>
            <Footer />
        </div>
    );
};

export default PageRestauration;