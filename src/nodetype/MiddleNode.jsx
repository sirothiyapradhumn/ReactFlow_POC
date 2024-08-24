import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'

function MiddleNode({ data }) {

  return (
    <>
      <div className={`${styles.node} ${styles.middleNode} ${data?.searchHighlight && styles.search}`}>
        <div>{data.label}</div>
        <span className={styles.closeBtn} role='button'>
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
