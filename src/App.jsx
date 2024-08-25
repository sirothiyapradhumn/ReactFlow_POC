import Canvas from './Canvas'
import LeftHeader from './LeftHeader'
import { CanvasContextProvider } from './context/CanvasContext'
import styles from './index.module.css';

const App = () => {
  return (
    <CanvasContextProvider>
      <div className={styles.canvasModule}>
        <LeftHeader/>
        <Canvas />
      </div>
    </CanvasContextProvider>
  )
}

export default App
