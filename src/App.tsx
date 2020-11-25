import React from 'react';
import axios from 'axios';

import Icon from './Icon/Icon'
import './App.css';
import { getUrlQueryParameter } from './urlQueryParameter/urlQueryParameter'

function App() {

  const client_id: string = '770y0r3cs7ut8d'
  const redirect_uri: string = 'https%3A%2F%2Fcompetent-colden-5df94a.netlify.app'
  const client_secret: string = '33bihXaNnNYH9VWo'

  const getToken = ( code: string | null | true ) => {
    console.log('get token')
    axios({
      method: 'post',
      url: 'https://www.linkedin.com/oauth/v2/accessToken',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Request-Headers':'Origin, X-Requested-With, Content-Type, Accept'
      },
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret
      },
    }
  ).then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch( error => {
      console.log('error', error)
    }
      )

  }

  const handleClick = () => {
    console.log('handle click')
    const code: string | null | true = getUrlQueryParameter( 'code' )
    console.log('code', code)
    getToken( code )
  }
  return (
    <div className="App">
      <header className="App-header">
                 <a
                  onClick={ () => handleClick() }
                  href={
                    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=DCEeFWf45A53sdfKef424&scope=r_liteprofile%20r_emailaddress%20w_member_social`
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
