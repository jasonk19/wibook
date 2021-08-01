import React from 'react'
import '../assets/styles/TopManga.scss'
import Card from './Card'

function TopManga({topManga}) {
  return (
    <div className='TopManga'>
      <h1>Top Popular Manga</h1>
      <div className="main-content">
        {topManga.map(manga => (
          <Card 
          href={manga.url}
          src={manga.image_url}
          alt='Top Manga'
          name={manga.title}
          ranking={manga.rank}
        />
        ))}
      </div>
    </div>
  )
}

export default TopManga
