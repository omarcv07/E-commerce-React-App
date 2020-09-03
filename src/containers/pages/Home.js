import React, { Fragment } from 'react';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Parallax from '../../components/UI/Parallax/Parallax';
import HomeProducts from './HomeProducts'

const Home = () => {
    return (
        <Fragment>
            <Jumbotron>
                <h1 className='text-white'>BRAWELS New Season</h1>
                <h2><a className='text-white'>Shop now</a></h2>
            </Jumbotron>
            <HomeProducts />
            <Parallax>
                <h1><a>Shop right now!</a></h1>
            </Parallax>
        </Fragment>
    );
}

export default Home;  