import React from 'react'
import doraemon from '../assets/imgs/doraemon.png'
import logo from '../assets/imgs/logo.png'

function Header() {
  return (
    <header>
            <div className="logo">
                <img src={logo} alt="**" />
            </div>
            <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder='Search' />
            </div>
                <nav>
                    <ul>
                        <li><a href="#"><i className="fas fa-home"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                        <li><a href="#"><i className="far fa-plus-square"></i></a></li>
                        <li><a href="#"><i className="far fa-compass"></i></a></li>
                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                        <li><a href="#"><img src={doraemon} alt="doraemon" /></a></li>

                    </ul>
                </nav>
        </header>
  )
}

export default Header