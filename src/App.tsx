import React from 'react';
import Icon from './Icon/Icon'
import './App.css';
import { getUrlQueryParameter } from './urlQueryParameter/urlQueryParameter'

function App() {
  const handleClick = () => {
    console.log('handle click')
    const code = getUrlQueryParameter( 'code' )
    console.log('code', code)
  }
  return (
    <div className="App">
      <header className="App-header">
                 <a
                  onClick={ () => handleClick() }
                  href={
                    'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=770y0r3cs7ut8d&redirect_uri=https%3A%2F%2Fcompetent-colden-5df94a.netlify.app%2F&state=DCEeFWf45A53sdfKef424&scope=r_liteprofile%20r_emailaddress%20w_member_social'
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
