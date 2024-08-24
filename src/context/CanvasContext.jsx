import React, { createContext, useMemo, useState } from 'react';
import { useNodesState, useEdgesState, MarkerType } from '@xyflow/react';

const CanvasContext = createContext({
  nodes: [],
  setNodes: () => { },
  onNodesChange: () => { },
  edges: [],
  setEdges: () => { },
  onEdgesChange: () => { },
});

const initialNodes = [
  {
    id: '1',
    type: 'IpNode',
    data: { label: 'Table', searchHighlight: false },
    position: { x: 100, y: 150 },
  },
  {
    id: '2',
    type: 'IpNode',
    data: { label: 'Table', searchHighlight: false },
    position: { x: 100, y: 300 },
  },
  {
    id: '3',
    type: 'MdNode',
    data: { label: 'Join', searchHighlight: false },
    position: { x: 300, y: 225 },
  },
  {
    id: '4',
    type: 'MdNode',
    data: { label: 'Transform', searchHighlight: false },
    position: { x: 500, y: 225 },
  },
  {
    id: '5',
    type: 'OpNode',
    data: { label: 'Output', searchHighlight: false },
    position: { x: 700, y: 225 },
  },
];

const initialEdges = [
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: 'black',
    },
  },
];

export const CanvasContextProvider = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const value = useMemo(() => ({
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
  }), [
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
  ]);

  return <CanvasContext.Provider value={value}>
    {children}
  </CanvasContext.Provider>;
};

export default CanvasContext;
