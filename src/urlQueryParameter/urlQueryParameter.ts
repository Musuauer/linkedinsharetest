// @ts-nocheck
export const getUrlQueryParameter = ( name, url = window.location.href ) => {
    name = name.replace( /[[\]]/g, '\\$&' )
    const regex = new RegExp( '[?&]' + name + '(=([^&#]*)|&|#|$)' )
    const results = regex.exec( url )

    if ( !results ) {
        return null
    }

    if ( !results[ 2 ] ) {
        return true
    }

    return decodeURIComponent( results[ 2 ].replace( /\+/g, ' ' ) )
}

export const objectToParams = ( obj ) => {
    return ( Object.keys( obj ).length && Object.keys( obj ).map( key => `${ key }=${ obj[ key ] }` ).join( '&' ) ) || ''
}

export const getUrlQueryParameters: any = ( url = window.location.href ) => {
    const params = url.split( '?' )
    if ( !params[ 1 ] ) {
        return {}
    }

    return params[ 1 ].split( '&' ).reduce( ( abs, res ) => {
        const pair = res.split( '=' )
        return {
            ...abs,
            [ pair[ 0 ] ]: pair[ 1 ] || true,
        }
    }, {} )
}

export const clearParams = ( params: string[] = [] ) => {
    const urlArr = window.location.href.split( '?' )
    const base = urlArr[ 0 ]
    let newUrl = base

    if ( !params.length ) {
        window.history.replaceState( '', '', newUrl )
        return
    }

    if ( params ) {
        const newParams = urlArr[ 1 ]
            ? urlArr[ 1 ].split( '&' ).reduce( ( res, param ) => {
                const split = param.split( '=' )
                if ( params.indexOf( split[ 0 ] ) !== -1 ) {
                    return res
                }
                return {
                    ...res,
                    [ split[ 0 ] ]: split[ 1 ],
                }
            }, {} )
            : ''
        if ( Object.keys( newParams ).length ) {
            newUrl = base + Object.keys( newParams ).length && ( '?' + objectToParams( newParams ) )
        } else {
            newUrl = base
        }
    }

    window.history.replaceState( '', '', newUrl )
}

export const getBaseUrl = () => {
    const urlArr = window.location.href.split( '?' )
    return urlArr[ 0 ]
}

export const replaceAndAddParams = ( obj ) => {
    const urlArr = window.location.href.split( '?' )
    const base = urlArr[ 0 ]
    const currentQueryParams = getUrlQueryParameters()
    window.history.replaceState( '', '', base + '?' + objectToParams( {
        ...currentQueryParams,
        ...obj,
    } ) )
}
