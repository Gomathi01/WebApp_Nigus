import './css/bootstrap.min.css'
import './css/style.css'
import React, {useEffect} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';
import CustomJS from './js/script.js'

function App() {

  return (
    <div className="body">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
