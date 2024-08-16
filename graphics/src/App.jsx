import { useState } from 'react'
import './App.css'

import AddGraphic from "./graphics/AddGraphic.jsx";
import Graphics from "./graphics/Graphics.jsx";

function App() {
  const[graphic, setGraphic] = useState([
    {
    id: 1,
    color: "#ff9999",
    height: "80%",
    name: "График 1",
    },
    {
      id: 1,
      color: "#438997",
      height: "70%",
      name: "График 1",
    },
      {
          id: 1,
          color: "#439754",
          height: "40%",
          name: "График 1",
      },
      {
          id: 1,
          color: "#974359",
          height: "90%",
          name: "График 1",
      },
  ])

  return (
    <div className={'container'}>
        <AddGraphic graphic={graphic} setGraphic={setGraphic} />
        <Graphics graphic={graphic} setGraphic={setGraphic} />

        {/*{graphic.map(item => (*/}
        {/*    <Graphics key={item.id} setGraphic={setGraphic} graphic={item} />*/}
        {/*))}*/}
    </div>
  )
}

export default App
