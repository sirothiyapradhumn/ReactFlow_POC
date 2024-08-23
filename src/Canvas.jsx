import React, { useCallback, useContext } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    addEdge,
    MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import InputNode from './nodetype/InputNode';
import OutputNode from './nodetype/OutputNode';
import MiddleNode from './nodetype/MiddleNode';
import CanvasContext from './context/CanvasContext';

const nodeTypes = { IpNode: InputNode, OpNode: OutputNode, MdNode: MiddleNode }

const Canvas = () => {
    const {nodes, onNodesChange, edges, setEdges, onEdgesChange} = useContext(CanvasContext);

    const onConnect = useCallback(
        (params) => setEdges((eds) => {
            const tempParam = {
                ...params,
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    width: 20,
                    height: 20,
                    color: 'black',
                },
                style: {
                    strokeWidth: 1,
                    stroke: 'black',
                },
            }
            return addEdge(tempParam, eds);
        })
        ,[setEdges]);

    return (
        <div style={{ width: '99vw', height: '97vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Controls />
                <MiniMap />
                <Background
                    variant="lines"
                    color="#27a8ea38"
                    gap={12}
                    size={0.2} />
            </ReactFlow>
        </div>
    );
}

export default Canvas;