import React, { Fragment } from 'react';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Parallax from '../../components/UI/Parallax/Parallax';
import HomeProducts from './HomeProducts'

const Home = () => {
    return (
        <Fragment>
            <Jumbotron>
                <h1 className="text-white">BRAWELS New Season</h1>
                <a className="text-white"><h2>Shop now</h2></a>
            </Jumbotron>
            <HomeProducts />
            <Parallax>
                <a><h1 className="text-white">Shop right now!</h1></a>
            </Parallax>
        </Fragment>
    );
}

export default Home;  