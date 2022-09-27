import React from 'react'


export default function Billboard(props) {
    return (
        <div data-aos={props.effect} data-aos-duration="2000" ref={props.refer} className='home-text'>
            { props.children }
        </div>
    )
}
