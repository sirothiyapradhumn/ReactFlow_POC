import Canvas from './Canvas'
import { CanvasContextProvider } from './context/CanvasContext'

const App = () => {
  return (
    <CanvasContextProvider>
      <Canvas />
    </CanvasContextProvider>
  )
}

export default App
