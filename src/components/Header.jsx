import React from 'react'
import '../assets/styles/Header.scss'

function Header() {
  return (
    <header className='header'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob'>
        <path fill="#5E09AD" d="M65.2,-0.3C65.2,25.4,32.6,50.8,2.3,50.8C-28.1,50.8,-56.2,25.4,-56.2,-0.3C-56.2,-25.9,-28.1,-51.9,2.3,-51.9C32.6,-51.9,65.2,-25.9,65.2,-0.3Z" transform="translate(100 100)" />
      </svg>
      <h1><strong className='title'>WiBook</strong><span className='subtitle'>The<strong>Anime</strong>&<strong>Manga</strong>Collection</span></h1>
    </header>
  )
}

export default Header
