import React from 'react';
import  Header from './componets/header/index'
import './app.scss'
import Headline from './componets/headline/index'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
          <Headline header="Post" desc="Click here to fetch all post" />
      </section>
    </div>
  );
}

export default App;
