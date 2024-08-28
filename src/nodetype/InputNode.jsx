import { useCallback, useState, useContext } from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './NodeStyle.module.css'
import Action from '../Actions';
import CanvasContext from '../context/CanvasContext';

const InputNode = ({ data, id, positionAbsoluteX, positionAbsoluteY }) => {
  const [actionToggle, setActionToggle] = useState(false);
  const { setNewNodeType } = useContext(CanvasContext);

  const onActionClick = (ndType, ndName) => {
    setNewNodeType({
      type: ndType,
      ndName: `${data.label} ${ndName}`,
      position: { x: positionAbsoluteX + 200, y: positionAbsoluteY},
      srcId: id,
    });
    setActionToggle(false);
  };

  const actionConfig = [
    {
      id: 1,
      label: 'Transform',
      onClick: () => onActionClick('MdNode', 'Transform'),
    },
    {
      id: 2,
      label: 'Join',
      onClick: () => onActionClick('MdNode', 'Join'),
    }
  ];

  return (
    <>
      <div className={`${styles.node} ${styles.inputNode} ${data?.searchHighlight && styles.search}`}>
        <div className={styles.ndlabel}>{data.label}</div>
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
