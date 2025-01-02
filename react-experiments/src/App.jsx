import React, {useState} from 'react'
function App() {
  return <div>
  <CardWrapper>
    <TextComponent />
  </CardWrapper>
  <CardWrapper>
    hello there!
  </CardWrapper>
  </div>
}

function CardWrapper({children}) {
 return <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
  {children}
 </div>
}

function TextComponent() {
  return <div>
    hello from text component
  </div>
}
export default App
