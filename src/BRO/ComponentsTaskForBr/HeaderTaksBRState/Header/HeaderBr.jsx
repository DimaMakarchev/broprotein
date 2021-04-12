import React, {Component} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../resource/menu.jpg'

export class HeaderBr extends Component {
    render() {
        return (
            <>
                <div className={style.header}>
                    <div className={style.containerLogo}><img src={logo} alt='img'/></div>
                    <div className={style.containerBtn}>
                        <div className={style.nav}><NavLink to='/protein' className={style.link}>Protein</NavLink></div>
                        <div className={style.nav}><NavLink to='/pagination' className={style.link}>Pagination</NavLink></div>
                        <div className={style.nav}><NavLink to='/errortest' className={style.link}>Error test</NavLink></div>
                        <div className={style.nav}><NavLink to='/' className={style.link}>Start</NavLink></div>
                    </div>
                </div>
            </>
        )
    }
}
