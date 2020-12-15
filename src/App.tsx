import React, { useEffect } from 'react';
import axios from 'axios';

import Icon from './Icon/Icon'
import './App.css';
import { getUrlQueryParameter, clearParams } from './urlQueryParameter/urlQueryParameter'

function App() {
  const client_id: string = '770y0r3cs7ut8d'
  // let redirect_uri: string = 'https%3A%2F%2Fcompetent-colden-5df94a.netlify.app%2F'
  let redirect_uri: string = 'https://competent-colden-5df94a.netlify.app/'
  const client_secret: string = '33bihXaNnNYH9VWo'
  const state: string = 'asdgsdffoih243'
  const local_uri: string = 'http://localhost:3000/'

  const access_token = 'AQVVGw0zf-QW9IyMa8sBcI87USBkCQRJ-a3tSc_5yVMxJnh9kq1DEHx6ItdN4CK79CK-kmSHgfoGZxHArzwh2uW5ZU0jU3gqXrzOdL9zVpH_SZ1k3BLfWgcbfoh5icubOy6XHOqsyi2DcU_YPovAfnUZF1TxGYOMnnvMgt0AY3Nrz0QldcOLLNxLGZYuKgrHg1yQ6SoCx406SaHVgZ9W6K0SZWyiDs7jdZhCgvaf-kC5jB49tQyIHkVukyDVwWtImtzSWgt_oyIt38dFTK11WifaRqb2JZ4bqZ2GZuwCJTJ2Hf34yuQ2JI4gDD92XOEb_KvFoS8E5-Y7alv8bGFjYBBW2Im73g'

  // redirect_uri = local_uri



  useEffect(() => {
    const urlCode: string | null | true = getUrlQueryParameter( 'code' )
    const returnState: string | null | true = getUrlQueryParameter( 'state' )

    console.log('urlCode', urlCode)
    console.log('state', state)
    console.log('returnState', returnState)
    clearParams()

    const getToken = ( code: string | null | true ) => {
      console.log('get token')
      axios({
        method: 'post',
        url: 'https://www.linkedin.com/oauth/v2/accessToken',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
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
        console.log('res',res);
        console.log( 'res.data', res.data);
      })
      .catch( error => {
        console.log('error', error)
      }
        )

    }
    if ( state === returnState ) {
      urlCode && getToken( urlCode )
    } else console.log('state and returnState are different')




  }, [redirect_uri])



  const handleClick = () => {
    console.log('handle click')

  }
  return (
    <div className="App">
      <header className="App-header">
                 <a
                  onClick={ () => handleClick() }
                  href={
                    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=r_liteprofile%20r_emailaddress%20w_member_social%20w_organization_social%20rw_organization_admin`
                  }
                  // target='_blank'
                  // rel='noreferrer'
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
