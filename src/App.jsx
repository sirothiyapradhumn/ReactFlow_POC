import Canvas from './Canvas'
import LeftNav from './LeftNav'
import { CanvasContextProvider } from './context/CanvasContext'
import styles from './index.module.css';

const App = () => {
  return (
    <CanvasContextProvider>
      <div className={styles.canvasModule}>
        <LeftNav/>
        <Canvas />
      </div>
    </CanvasContextProvider>
  )
}

export default App
