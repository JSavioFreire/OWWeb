import './header.css'
import logo from '../img/logo/logoOW2.png'

export default function Header(){


    return(
        <div className='header'>
            <img src={logo} className='logo'/>
        </div>
    )
}