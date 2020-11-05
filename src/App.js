import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import MainLayout from './layouts/MainLayout';
import Home from './containers/pages/Home';
import Men from './containers/pages/Men';
import Women from './containers/pages/Women';
import Kids from './containers/pages/Kids';
import Sale from './containers/pages/Sale';
import Cart from './containers/pages/Cart';
import ProductDetails from './components/DetailsProduct'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { toogleSideBar, fetchProducts } from './store/actions/actionCreators';
import './App.scss';

const App = (props) => {

  const { fetchProducts } = props;

  useEffect(
    _ => {
      fetchProducts()
    },
    []
  )

  return (
    <div className='App'>

      <MainLayout
        toogleSideBar={props.toogleSideBar}
        showSideNavigation={props.showSideNavigation}>
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/men' component={Men} />
          <Route exact path='/women' component={Women} />
          <Route exact path='/kids' component={Kids} />
          <Route exact path='/sale' component={Sale} />
          <Route exact path='/product/:productId' component={ProductDetails} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/home' />
        </Switch>
      </MainLayout>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    showSideNavigation: state.showSideNavigation,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toogleSideBar: () => dispatch(toogleSideBar()),
    fetchProducts: () => dispatch(fetchProducts())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));