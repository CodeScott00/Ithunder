import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search.js';
import Container from '@mui/material/Container';
import CardMusicList from './components/CardMusicList.js';
import useDebounce from './hooks/debounce';



const App = () => {

  const [search, setSearch] = useState() // holds search
  const [music, setMusic] = useState([]) // holds music
  const [loading, setLoading] = useState(false)

  const debouncedSearch = useDebounce(search, 500)


useEffect(() => {
  // search api
  async function fetchData() {
    setLoading(true);

    const data = await fetch(
      `https://itunes.apple.com/search?term=${debouncedSearch}&entity=album&country=au` // check this later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ).then((result) => result.json());
    setMusic(data.results)
    setLoading(false)
    
    console.log("data",data)  //DEBUG
  }
  if(debouncedSearch) {
  fetchData()
  }
}, [debouncedSearch])

  return (
    <Container className='App'>
      <h1>app container</h1>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <CardMusicList music={music}/>
    </Container>
  )
}

export default App;
