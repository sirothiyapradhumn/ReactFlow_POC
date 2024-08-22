import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import './nodeStyle.css'

function InputNode({ data }) {

  return (
    <>
      <div className='node'>
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
    </>
  );
}

export default InputNode;
