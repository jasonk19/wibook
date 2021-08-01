import React from 'react'
import '../assets/styles/Anime.scss'
import Card from './Card'

function Anime(props) {
  return (
    <div className='anime-search'>
      <h1>Anime Search</h1>
      <form
        action=''
        className='search-box'
        onSubmit={props.handleSearch}
      >
        <input
          type='search'
          placeholder='Search anime...'
          required
          value={props.search}
          onChange={e => props.setSearch(e.target.value)}
        ></input>
      </form>
      <div className="main-content">
        {props.animeList.map(anime => (
          <Card 
            href={anime.url}
            src={anime.image_url}
            alt='Anime'
            name={anime.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Anime
