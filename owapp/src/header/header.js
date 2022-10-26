import React  from 'react';

import './header.css'
import logo from '../img/logo/logoOW2.png'

export default function Header(){


    return(
        <div className='header'>
            

                <img src={logo} className='logo'/>
                <div className='opcoes'>
                    <a href='#'>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Personagens</a>
                    <a href='#'>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Mapas</a>
                    <a href='#'>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Players</a>
                    <a href='#'>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Requisitos</a>
                    <a href='#' className='baixar'>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        Baixar</a>
                </div>
                
                
            </div>
            

    )
}