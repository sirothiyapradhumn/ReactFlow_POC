import Canvas from './Canvas'
import LeftNav from './LeftNav'
import { CanvasContextProvider } from './context/CanvasContext'
import { ReactFlowProvider } from '@xyflow/react';
import styles from './index.module.css';
import MiniDrawer from './MiniDrawer';

const App = () => {
  return (
    <div className={styles.canvasModule}>
      <MiniDrawer/>
      <LeftNav />
      <Canvas />
    </div>
  )
}

export default () => (
  <ReactFlowProvider>
    <CanvasContextProvider>
      <App />
    </CanvasContextProvider>
  </ReactFlowProvider>
);