import React, { Component } from 'react';

const Logo = (props) => (
    <div className="logo animated fadeInDownBig">
        <img src={require('../../assert/img/LOGO.png')} style={{width:props.width}}/>
    </div>
)

export default Logo;