import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'

function InputNode({ data }) {

  return (
    <>
      <div className={`${styles.node} ${styles.inputNode} ${data?.searchHighlight && styles.search}`}>
        <div>{data.label}</div>
        <div className={styles.addBtn}>&#43;</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={true}
      />
    </>
  );
}

export default InputNode;
