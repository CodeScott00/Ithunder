import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card.js";
import Header from './components/Header';
import Search from './components/Search.js';
import Container from '@mui/material/Container';



const App = () => {

  // const [music, setMusic] = useState([])
  // const [selectedMusic, setSelectedMusic] = useState([null])
  const [search, setSearch] = useState([null]) // holds search
  const [music, setMusic] = useState([])
  const [loading, setLoading] = useState(false)

  // const getMusic = () => {
  //   fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
  //   .then((response) => response.json())
  //   .then((data) => setMusic(data.feed.entry))
  // }

  // useEffect(() => {
  //   getMusic()
  // }, [])


//   const handleMusicSelected = (event) => {
//     setSelectedMusic(event.target.value)
// }

useEffect(() => {
  // search api
  async function fetchData() {
    setLoading(true);

    const data = await fetch(
      `https://itunes.apple.com/search?term=taylor&entity=album` //HERE
      //'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    ).then((result) => result.json());
    setMusic(data.results)
    setLoading(false)
    
    console.log("data",data)
  }
  fetchData()
}, [search])

  
  const handleSetSearch = (event) => { // handler for search
    setSearch(event.target.value)
  }

  return (
    <Container className='App'>
    <div>
      <h1>app container</h1>
      <Header />
      {/* <Search music={music} handleMusicSelected={handleMusicSelected}/> */}
      <Search handleSetSearch={handleSetSearch}/>
      <Card />
      {JSON.stringify(music)}
    </div>
    </Container>
  )
}

export default App;
