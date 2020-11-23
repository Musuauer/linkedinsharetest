import React from 'react';
import Icon from './Icon/Icon'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
                  onClick={ ( e ) => { e.stopPropagation() } }
                  href={
                    'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=770y0r3cs7ut8d&redirect_uri=https://www.admiralcloud.com&state=DCEeFWf45A53sdfKef424&scope=r_liteprofile%20r_emailaddress%20w_member_social'
                  }
                  target='_blank'
                  rel='noreferrer'
                  >
                    <Icon
                      className='social-icon'
                      >
                        Share on LinkedIn
                    </Icon>
                </a>
      </header>

    </div>
  );
}

export default App;
