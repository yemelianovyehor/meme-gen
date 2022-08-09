import * as React from 'react';
import Form from '@components/Form/Form';
import Meme from '@components/Meme/Meme';
import Header from '@components/Header/Header';
import './App.css'
import {getMemes} from './getMemesAPI';

const Memes = await getMemes();

 
const App = () => {
  
  const [MemeObj, setMemeObj] = React.useState(randomMeme());

  function randomMeme(){
    return Memes[Math.floor(Math.random()*100)]
  }

  function updateMeme(){
    console.log("new meme: "+ randomMeme().url)
    setMemeObj(randomMeme())
  }

  return ( 
    <div className="container">
      <Header/>
      <main>
        <Form buttonClickHandler={updateMeme}/>
        <Meme memeUrl={MemeObj.url} memeName={MemeObj.name} />
      </main>
    </div>
   );
}
 
export default App;