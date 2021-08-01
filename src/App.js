import { useState, useEffect } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar';
import TopAnime from './components/TopAnime';
import TopManga from './components/TopManga';
import Anime from './components/Anime';
import Manga from './components/Manga';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {

  const [topAnime, setTopAnime] = useState([])
  const [topManga, setTopManga] = useState([])
  const [animeList, setAnimeList] = useState([])
  const [mangaList, setMangaList] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    fetchAnime(search)
    fetchManga(search)
  }

  const fetchManga = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json())
    setMangaList(temp.results)
  }

  const fetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json())

    setAnimeList(temp.results)
  }

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json())
    
    setTopAnime(temp.top.slice(0,20))
  }

  const getTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
      .then(res => res.json())
    
    setTopManga(temp.top.slice(0,20))
  }

  useEffect(() => {
    getTopAnime()
    getTopManga()
  }, [])


  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content-wrap'>
          <Sidebar />
          <Switch>
            <Route path='/topanime'>
              <TopAnime 
                topAnime={topAnime}
              />
            </Route>
            <Route path='/topmanga'>
              <TopManga 
                topManga={topManga}
              />
            </Route>
            <Route path='/anime-search'>
              <Anime 
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
                animeList={animeList}
              />
            </Route>
            <Route path='/manga-search'>
              <Manga 
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
                mangaList={mangaList}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>  
  );
}

export default App;
