import React from 'react'
import Controller from './Player/Controller/Controller'
import Image from './Player/Components/Image';
import Title from './Player/Components/Title';
import Cover from './imgs/cover1.png'
import "./App.scss"
import Progress from './Player/Components/Progress';

function App() {
  return (
    <div className="App">
        <div className="cover-container">
          <Image name={Cover} className="cover-image" />
        </div>
        <div className="controls-container">
          <Title artist={"Billie Eilish"} songName={"Everything I Wanted"} />
          <Progress />
          <Controller />
        </div>
    </div>
  );
}

export default App;
