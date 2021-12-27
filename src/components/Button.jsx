import React from 'react'


import * as style from './Content_style.css'

function Button(props) {

    const{label} = props

    return (
        <button className={style.button}><span>{label}</span></button>
    )
}

export default Button
