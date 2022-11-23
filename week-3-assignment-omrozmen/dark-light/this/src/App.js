import Container from "./Container"
import { DarkThemeProvider } from "./context/DarkThemeContext"
import "./App.css"

function App() {
  return (
    <div className="App">
      <DarkThemeProvider>
        <Container />
      </DarkThemeProvider>
    </div>
  )
}
export default App;