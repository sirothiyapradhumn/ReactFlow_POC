import { useContext } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'
import CanvasContext from '../context/CanvasContext';

function MiddleNode({ data, id }) {
  const { setNodes } = useContext(CanvasContext);

  const onDeleteNode = () => {
    setNodes((prevNds) => {
      const tempNds = [...prevNds];
      return tempNds.filter((node) => node.id !== id);
    })
  }

  return (
    <>
      <div className={`${styles.node} ${styles.middleNode} ${data?.searchHighlight && styles.search}`}>
        <div>{data.label}</div>
        <span
          className={styles.closeBtn}
          onClick={() => onDeleteNode()}
          role='button'>
          x
        </span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={true}

      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={true}
      />
    </>
  );
}

export default MiddleNode;
