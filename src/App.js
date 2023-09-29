import React, { useCallback } from 'react';
import './App.css';
import Main from './Pages/Main';
import store from './Redux/store';
import { Provider } from 'react-redux';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function App() {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 3000,
        },
      },
      color: {
        value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 4, max: 7 },
      },
      // links: {
      // enable: true,
      // distance: 400,
      // color: '#808080',
      // opacity: 0.4,
      // width: 1,
      // },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        // onClick: {
        //   enable: true,
        //   mode: 'push',
        // },
      },
      modes: {
        grab: {
          distance: 140,
          // links: {
          //   opacity: 1,
          // },
        },
        // push: {
        //   quantity: 4,
        // },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  // const location = window.location.pathname;
  return (
    <Provider store={store}>
      <div className="main">
        <Particles options={options} init={particlesInit} />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
