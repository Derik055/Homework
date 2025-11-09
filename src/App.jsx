import './App.css'
import Button from './Components/Button/Button'

function App() {
  let message = "message"
  const handleonClick = (text) => {
    alert(text)
    message = text
  }

  return (
    <>
      <Button text = "click" onClick={() => handleonClick("hello")}/>
    </>
  )
}

export default App
