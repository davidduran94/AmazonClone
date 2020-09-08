import React from 'react';
import "./Home.css";
import Product from "./components/Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home___image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3Hp0mlAYGERlz0bePFnSayvjKCvTLqVpU6J-3k63gMaLccXE33KDUHKbg" 
                alt="alt" />
            </div>

            <div className="home__row">
                {/** 2 products */}
                <Product/>
                <Product/>
            </div>

            <div className="home__row">
                {/** 3 products */}
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className="home__row">
                {/** 1 products */}
                <Product/>
            </div>

        </div>
    )
}

export default Home
