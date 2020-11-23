import React, { ReactNode } from 'react'

interface Props {
    className?: string;
    children: ReactNode;
    onclick?: () => void;
}

const Icon: React.FC<Props> = ( { className, children, onclick } ) => {

    return (
        <div className='icon'
          onClick={ onclick }
        >
            { children }
        </div>
    )
}

export default Icon
