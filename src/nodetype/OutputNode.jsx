import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'

function OutputNode({ data }) {

  return (
    <>
      <div className={`${styles.node} ${styles.outputNode} ${data?.searchHighlight && styles.search}`}>
        <div>{data.label}</div>
        <span className={styles.closeBtn} role='button'>
          x
        </span>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={true}
      />
    </>
  );
}

export default OutputNode;
