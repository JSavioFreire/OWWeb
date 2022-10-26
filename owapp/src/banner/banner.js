import './banner.css'
import React from 'react';

import Video from "../video/video";
import logoText from '../img/logo/logoText.png'
import ps from '../img/logo/ps.png'
import xb from '../img/logo/xbox.png'
import sw from '../img/logo/switch.png'
import bn from '../img/logo/bn.png'


export default function Banner(){

    return(
        <div className='banner'>
            <div className='sobreBanner'>
                <img className='logoText' src={logoText}/>
            </div>

            <div className='divVideo'>
                <Video/>
                <p>Disponível para: </p>
                    <div className='miniLogos'>
                        <img src={ps} className='miniLogo'/>
                        <img src={xb} className='miniLogo'/>
                        <img src={sw} className='miniLogo'/>
                        <img src={bn} className='miniLogo'/>
                    </div>
            </div>
        </div>
    )
}