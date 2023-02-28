import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search.js';
import Container from '@mui/material/Container';
import CardDetail from './components/CardDetail.js';



const App = () => {

  const [search, setSearch] = useState([null]) // holds search
  const [music, setMusic] = useState([]) // holds music
  const [loading, setLoading] = useState(false)


useEffect(() => {
  // search api
  async function fetchData() {
    setLoading(true);

    const data = await fetch(
      `https://itunes.apple.com/search?term=${search}&entity=album&country=au` // check this later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ).then((result) => result.json());
    setMusic(data.results)
    setLoading(false)
    
    console.log("data",data)  //DEBUG
  }
  fetchData()
}, [search])

  return (
    <Container className='App'>
    <div>
      <h1>app container</h1>
      <Header />
      <Search search={search} setSearch={setSearch} />
      
      <CardDetail music={music}/>

      
      


      {/* {JSON.stringify(music)} */}
    </div>
    </Container>
  )
}

export default App;
