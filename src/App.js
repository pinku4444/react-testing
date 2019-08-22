import React from 'react';
import  Header from './componets/header/index'
import './app.scss'
import Headline from './componets/headline/index';
import { connect } from 'react-redux';

function App(props) {
  console.log(props.user);
  return (
    <div className="App">
      <Header />
      <section>
          <Headline header="Post" desc="Click here to fetch all post" />
      </section>
    </div>
  );
}

const mapsStateToProps = (state) => {
    const { user }  = state;
    return {
      user
    }
}

export default connect(mapsStateToProps)(App);
