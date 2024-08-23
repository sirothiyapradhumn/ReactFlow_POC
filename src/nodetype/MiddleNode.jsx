import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import './nodeStyle.css'

function MiddleNode({ data }) {

  return (
    <>
      <div className='node middleNode'>
        <div>{data.label}</div>
        <span className='closeBtn' role='button'>
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
