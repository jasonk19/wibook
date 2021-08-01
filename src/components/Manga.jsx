import React from 'react'
import '../assets/styles/Manga.scss'
import Card from './Card'

function Manga(props) {
  return (
    <div className='manga-search'>
      <h1>Manga Search</h1>
      <form
        action=''
        className='search-box'
        onSubmit={props.handleSearch}
      >
        <input
          type='search'
          placeholder='Search manga...'
          required
          value={props.search}
          onChange={e => props.setSearch(e.target.value)}
        ></input>
      </form>
      <div className="main-content">
        {props.mangaList.map(manga => (
          <Card 
            href={manga.url}
            src={manga.image_url}
            alt='Manga'
            name={manga.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Manga
