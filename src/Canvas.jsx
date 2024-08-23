import React, { useCallback } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import InputNode from './nodetype/InputNode';
import OutputNode from './nodetype/OutputNode';
import MiddleNode from './nodetype/MiddleNode';

const initialNodes = [
    {
        id: '1',
        type: 'IpNode',
        data: { label: 'IPNode 1' },
        position: { x: 100, y: 150 },
    },
    {
        id: '2',
        type: 'MdNode',
        data: { label: 'MdNode 2' },
        position: { x: 200, y: 250 },
    },
    {
        id: '3',
        type: 'OpNode',
        data: { label: 'OPNode 3' },
        position: { x: 300, y: 350 },
    },
];

const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' },
    // {
    //     id: 'e2-3', source: '2',
    //     target: '3',
    //     // animated: true,
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 20,
    //         height: 20,
    //         color: 'black',
    //     },
    // },
];

const nodeTypes = { IpNode: InputNode, OpNode: OutputNode, MdNode: MiddleNode }

const Canvas = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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