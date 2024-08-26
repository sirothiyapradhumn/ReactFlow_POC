import React, { useCallback, useContext, useEffect } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    addEdge,
    MarkerType,
    getConnectedEdges,
    getIncomers,
    getStraightPath,
    getSimpleBezierPath,
    Position,
    getOutgoers,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import InputNode from './nodetype/InputNode';
import OutputNode from './nodetype/OutputNode';
import MiddleNode from './nodetype/MiddleNode';
import CanvasContext from './context/CanvasContext';
import { highlightMock } from './mock';

const nodeTypes = { IpNode: InputNode, OpNode: OutputNode, MdNode: MiddleNode }
const canvasStyle = {
    backgroundColor: '#effaff',
};

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

        const connectedEdges = getConnectedEdges(nodes, edges);
        console.log('getConnectedEdges', connectedEdges)

        const incomers = getIncomers(
            {
                id: '3',
                type: 'MdNode',
                data: { label: 'JoinT1T2', searchHighlight: false },
                position: { x: 300, y: 225 },
              },
            nodes,
            edges,
          );
        console.log('incomers', incomers)

        const outgoers = getOutgoers(
            {
                id: '3',
                type: 'MdNode',
                data: { label: 'JoinT1T2', searchHighlight: false },
                position: { x: 300, y: 225 },
            },
            nodes,
            edges,
          );

          console.log('outgoers', outgoers);

          const findEdgesBetweenNodes = (allEdges, startNode, endNode) => {
            return allEdges.filter(
                (edge) =>
                    (edge.source === startNode && edge.target === endNode) ||
                    (edge.source === endNode && edge.target === startNode)
            );
          };

          const edges3ToLast = findEdgesBetweenNodes(edges, '3', '5');
          console.log('edges3ToLast', edges3ToLast);

        // const [path, labelX, labelY, offsetX, offsetY] = getStraightPath({
        //     sourceX: 300,
        //     sourceY: 225,
        //     targetX: 700,
        //     targetY: 225,
        //   });

        // const [path, labelX, labelY, offsetX, offsetY] = getSimpleBezierPath({
        //     sourceX: 300,
        //     sourceY: 225,
        //     sourcePosition: Position.Right,
        //     targetX: 700,
        //     targetY: 225,
        //     targetPosition: Position.Left,
        //   });

        //   console.log("path", path);
        //   console.log("labelX", labelX);
        //   console.log("labelY", labelY);
        //   console.log("offsetX", offsetX);
        //   console.log("offsetY", offsetY);

        useEffect(() => {
            // highlightMock
            setEdges((prevEdge) => {
                return prevEdge.map((ed) => {
                    const findEdIdx = highlightMock.findIndex((ele) => ele.id === ed.id);
                    if(findEdIdx > -1) {
                        return {
                            ...ed,
                            style: {
                                ...ed.style,
                                stroke: "#0fff4f"
                            }
                        }
                    }
                    return ed;
                })
            })
        }, [highlightMock])

    return (
        <div style={{ width: '99vw', height: '97vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                style={canvasStyle}
            >
                <Controls />
                <MiniMap />
                {/* <Background
                    variant="lines"
                    color="#27a8ea38"
                    gap={12}
                    size={0.2} /> */}
            </ReactFlow>
        </div>
    );
}

export default Canvas;