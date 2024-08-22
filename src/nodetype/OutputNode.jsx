import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import './nodeStyle.css'

function OutputNode({ data }) {

  return (
    <>
      <div className='node'>
        <div>{data.label}</div>
        <span className='closeBtn' role='button'>
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
