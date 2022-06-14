import './App.css';
import {getRSI} from './api/indicatorApi';
import {useState, useEffect} from 'react';

function App() {
  const [indicators, setIndicators] = useState({
    'ADA': 10,
    'XRP': 14.29,
    'DOT': 10.62,
    'BTC': 11.76,
    'SOL': 33.33,
    'ETH': 24.02
  });
  // console.log(indicators)
  // console.log(getRSI())

  // useEffect
  // useEffect(() => {
  //   const indicators = getRSI();
  //   setIndicators(indicators)
  // }, []); // will be called once -> in the beginning
  // setIndicators(getRSI());

  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="logo">
          <img />
          cryptocurrency logo
        </div>
        <div className="header-links">
          <div className="technical-analysis">Technical Analysis</div>
          <div className="download-extention">Google Extention</div>
          <div className="login">Login</div>
          <div className="sign-up">Sign Up</div>
        </div>
      </div>

      <div className="main">
        <div className="project-info">
          <div className="texts-and-photos">
            <div className="project-description">
              <h1>We help investors lose less and earn more.</h1>
            </div>
            <div className="project-photos"></div>
          </div>
        </div>
      </div>  
    {/* project info closed */}
      <div className="testing-data">
        {indicators}
      </div>
    </div>
  );
}

export default App;
