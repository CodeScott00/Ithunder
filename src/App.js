import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search.js';
import CardMusicList from './components/CardMusicList.js';
import useDebounce from './hooks/debounce';

const App = () => {

  const [search, setSearch] = useState("") // holds search
  const [music, setMusic] = useState([]) // holds music
  
  const debouncedSearch = useDebounce(search, 400)

useEffect(() => {
  // search api
  async function fetchData() {
    setMusic([]);

    const data = await fetch(
      `https://itunes.apple.com/search?term=${debouncedSearch}&entity=album&country=au`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    ).then((result) => result.json());
    setMusic(data.results)
    console.log("data",data)  //DEBUG
  }
  if(debouncedSearch) 
  fetchData();

}, [debouncedSearch])

  return (
    <div>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <CardMusicList music={music}/>
    </div>
  )
}

export default App;
