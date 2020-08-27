import React from 'react';
import {connect} from 'react-redux';
import MainLayout from './layouts/MainLayout';
import Home from './containers/pages/Home';
import Men from './containers/pages/Men';
import Women from './containers/pages/Women';
import Kids from './containers/pages/Kids';
import Sale from './containers/pages/Sale';
import DetailsProduct from './components/DetailsProduct'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { toogleSideBar } from './store/actions/actionCreators';
import './App.scss';

const App = (props) => {
  return (
    <div className="App">

      <MainLayout
        toogleSideBar={props.toogleSideBar}
        showSideNavigation={props.showSideNavigation}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/sale" component={Sale} />
          <Route exact path="/product/:productId" component={DetailsProduct} />
          <Redirect to="/home" />
        </Switch>
      </MainLayout>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    showSideNavigation: state.showSideNavigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toogleSideBar: () => dispatch(toogleSideBar())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));