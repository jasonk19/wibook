import React from 'react'
import '../assets/styles/TopAnime.scss'
import Card from './Card'

function TopAnime({ topAnime }) {
  return (
    <div className='TopAnime'>
      <h1>Top Popular Anime</h1>
      <div className="main-content">
        {topAnime.map(anime => (
          <Card 
            href={anime.url}
            src={anime.image_url}
            alt='Top Anime'
            name={anime.title}
            ranking={anime.rank}
          />
        ))}
      </div>
    </div>
  )
}

export default TopAnime
