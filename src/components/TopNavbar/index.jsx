import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import avatar from '../../assets/img/avatar.png'

export const TopNavbar = () => {
    return (
        <nav className="ob__navbar-top">
            <ul className="ob__navbar-content">
                <NavLink to="/feed/1" exact={true} className="ob__navbar-item">
                    <Logo />
                </NavLink>

                <NavLink to="/my" className="ob__navbar-item">
                    <div className="ob__navbar-icon ob__navbar-icon--ava">
                        <div className="ob__navbar-ava" style={{backgroundImage: `url(${avatar})`}}></div>
                    </div>
                    <div className="ob__navbar-title">
                        Meme
                    </div>
                </NavLink>
            </ul>
    </nav>
    )
}

/* <nav class="ob__navbar-top">
<ul class="ob__navbar-content">
    <router-link to="/feed/1" class="ob__navbar-item" v-ripple>
        <svgicon icon="logo" width="122" height="23" color="#fff"/>
    </router-link>
    <router-link to="/my" class="ob__navbar-item" v-ripple>
        <div class="ob__navbar-icon ob__navbar-icon--ava">
            <div class="ob__navbar-ava" :style="`background-image: url('${imageData[0]}')`"></div>
        </div>
        <div class="ob__navbar-title">
            {{ name }}
        </div>

        <div class="ob__tooltip" @click.prevent="doLogout">
            <svgicon icon="logout" width="28" height="28" color="#27AE60"/> Logout
        </div>
    </router-link>
</ul>
</nav> */