import React from 'react'
import '../assets/styles/Sidebar.scss'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul>
        <Link to='/topanime' className='nav-link'><div className='button'><p>Top Anime</p></div></Link>
        <Link to='/topmanga' className='nav-link'><div className='button'><p>Top Manga</p></div></Link>
        <Link to='/anime-search' className='nav-link'><div className='button'><p>Anime Search</p></div></Link>
        <Link to='/manga-search' className='nav-link'><div className='button'><p>Manga Search</p></div></Link>
      </ul>
    </div>
  )
}

export default Sidebar
