import React, { useState } from 'react';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';

function App() {

  const [bg, setBg] = useState(hotBg);

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>

      <div className='overlay'>
        <div className='container'>

          <div className='section section__inputs'>
            <input type='text' name='city' placeholder='Enter City...' />
            <button>°F</button>
          </div>

          <div className='section section__temprature'>
            <div className='icon'>
              <h3>{`Delhi, IN`}</h3>
              <img src='' alt='weatherIcon' />
              <h3>Haze</h3>
            </div>

            <div className='temprature'>
              <h1>24°C</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App;
