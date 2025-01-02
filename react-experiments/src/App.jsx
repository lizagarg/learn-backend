function App() {

  return (
    <>
      <Header title="Welcome to React"/>
      <Header title="Welcome to React"/>
    </>
  )
}

function Header({title}) { //obj destructing
  return <div>
    {title}
  </div>
}
export default App
