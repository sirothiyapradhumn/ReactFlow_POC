import { useCallback, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'
import Action from '../Actions';

const InputNode = ({ data }) => {
  const [actionToggle, setActionToggle] = useState(false);
  const actionConfig = [
    {
      id: 1,
      label: 'Transform'
    },
    {
      id: 2,
      label: 'Join'
    }
  ];

  return (
    <>
      <div className={`${styles.node} ${styles.inputNode} ${data?.searchHighlight && styles.search}`}>
        <div>{data.label}</div>
        <div
          className={styles.addBtn}
          onClick={() => setActionToggle((prev) => !prev)}
        >
          &#43;
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
    </>
  );
}

export default InputNode;
