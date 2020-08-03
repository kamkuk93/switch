import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MentorsView from '../mentors_view/mentors_view';
import MainView from '../main_view/main_view';

// import Header from './../../components/header/header'
// import Nav from './../../components/nav/nav'
// import BackgroundColor from './../../components/background_color/background_color'
// import Description from './../../components/description/description'
// import styles from './root.module.scss';

class Root extends React.Component {

  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/mentors" component={MentorsView} />
        </Switch>
      </BrowserRouter>


    )
  }


}

export default Root;
