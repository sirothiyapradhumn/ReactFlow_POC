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
    useReactFlow,
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
    const {
        nodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        newNodeType,
        setNodes,
        srcDrop,
    } = useContext(CanvasContext);

    const { screenToFlowPosition } = useReactFlow();

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
        , [setEdges]);

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

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDropSrc = (event) => {
        event.preventDefault();

        // check if the dropped element is valid
        if (Object.keys(srcDrop).length === 0) {
            return;
        }

        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        setNodes((prevNds) => {
            const tempSrc = {
                ...srcDrop,
                position,
                id: (Math.floor(Math.random() * 10000) + 10000).toString().substring(1),
            }
            return [
                ...prevNds,
                tempSrc
            ]
        });
    };

    useEffect(() => {
        // highlightMock
        if (highlightMock.length > 0) {
            setEdges((prevEdge) => {
                return prevEdge.map((ed) => {
                    const findEdIdx = highlightMock.findIndex((ele) => ele.id === ed.id);
                    if (findEdIdx > -1) {
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
        }
    }, [highlightMock]);

    useEffect(() => {
        if (newNodeType.type) {
            const randomId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            setNodes((prevNds) => {
                const tempNd = {
                    id: randomId,
                    type: newNodeType.type,
                    data: { label: newNodeType.ndName, searchHighlight: false },
                    position: newNodeType.position,
                };
                return [
                    ...prevNds,
                    tempNd
                ]
            });
            setEdges((prevEds) => {
                const tempEdg = {
                    id: `e${newNodeType.srcId}-${randomId}`,
                    source: newNodeType.srcId,
                    target: randomId,
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        width: 20,
                        height: 20,
                        color: 'black',
                    },
                    style: {
                        strokeWidth: 1,
                        stroke: "black"
                    },
                };
                return [
                    ...prevEds,
                    tempEdg
                ]
            })
        }
    }, [newNodeType])

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
                onDragOver={onDragOver}
                onDrop={onDropSrc}
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