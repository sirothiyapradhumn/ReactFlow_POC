import { useContext, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'
import CanvasContext from '../context/CanvasContext';
import Action from '../Actions';

function MiddleNode({ data, id }) {
  const [actionToggle, setActionToggle] = useState(false);
  const { setNodes } = useContext(CanvasContext);

  const onDeleteNode = () => {
    setNodes((prevNds) => {
      const tempNds = [...prevNds];
      return tempNds.filter((node) => node.id !== id);
    })
  };

  const actionConfig = [
    {
      id: 1,
      label: 'Transform'
    },
    {
      id: 2,
      label: 'Join'
    },
    {
      id: 3,
      label: 'Output'
    }
  ];

  return (
    <>
      <div className={`${styles.node} ${styles.middleNode} ${data?.searchHighlight && styles.search}`}>
        <div>{data.label}</div>
        <div style={{ display: 'flex' }}>
          <span
            className={styles.closeBtn}
            onClick={() => onDeleteNode()}
            role='button'>
            x
          </span>
          <div 
            className={styles.addBtn}
            onClick={() => setActionToggle((prev) => !prev)}
          >&#43;
          </div>
        </div>
      </div>
      <div className={styles.actionBox}>
        {
          actionToggle && <Action btnConfig={actionConfig} />
        }
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
