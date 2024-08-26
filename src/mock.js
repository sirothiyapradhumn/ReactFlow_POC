import {
    MarkerType,
} from '@xyflow/react';

export const highlightMock = [
    {
        id: 'e2-3',
        source: '2',
        target: '3',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',

    },
    {
        id: 'e4-5',
        source: '4',
        target: '5',

    },
    // {
    //     id: 'e1-5',
    //     source: '1',
    //     target: '5',
    // },
    // {
    //     id: 'e1-4',
    //     source: '1',
    //     target: '4',
    // },
    // {
    //     id: 'e2-4',
    //     source: '2',
    //     target: '4',
    // },
];

export const allFlowList = [
    {
        flow: 'Flow1',
        nodes: [
            {
                id: '1',
                type: 'IpNode',
                data: { label: 'Table1', searchHighlight: false },
                position: { x: 51, y: 65 },
            },
            {
                id: '2',
                type: 'IpNode',
                data: { label: 'Table2', searchHighlight: false },
                position: { x: 51, y: 414 },
            },
            {
                id: '3',
                type: 'MdNode',
                data: { label: 'JoinT1T2', searchHighlight: false },
                position: { x: 240, y: 229 },
            },
            {
                id: '5',
                type: 'OpNode',
                data: { label: 'Output', searchHighlight: false },
                position: { x: 702, y: 170 },
            },
        ],
        edges: [
            {
                id: 'e2-3',
                source: '2',
                target: '3',
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    width: 20,
                    height: 20,
                    color: 'black',
                },
                style: {
                    strokeWidth: 1,
                    stroke: "black",
                },
            },
            {
                id: 'e1-3',
                source: '1',
                target: '3',
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
            },
        ]
    },
    {
        flow: 'Flow2',
        nodes: [
            {
                id: '1',
                type: 'IpNode',
                data: { label: 'Table1', searchHighlight: false },
                position: { x: 51, y: 65 },
            },
            {
                id: '3',
                type: 'MdNode',
                data: { label: 'JoinT1T2', searchHighlight: false },
                position: { x: 240, y: 229 },
            },
            {
                id: '4',
                type: 'MdNode',
                data: { label: 'Transform', searchHighlight: false },
                position: { x: 518, y: 227 },
            },
            {
                id: '5',
                type: 'OpNode',
                data: { label: 'Output', searchHighlight: false },
                position: { x: 702, y: 170 },
            },
        ],
        edges: [
            {
                id: 'e3-4',
                source: '3',
                target: '4',
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
            },
            {
                id: 'e4-5',
                source: '4',
                target: '5',
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
            },
            {
                id: 'e1-5',
                source: '1',
                target: '5',
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
            },
        ]
    },
    {
        flow: 'Flow3',
        nodes: [
            {
                id: '1',
                type: 'IpNode',
                data: { label: 'Table1', searchHighlight: false },
                position: { x: 51, y: 65 },
            },
            {
                id: '2',
                type: 'IpNode',
                data: { label: 'Table2', searchHighlight: false },
                position: { x: 51, y: 414 },
            },
            {
                id: '3',
                type: 'MdNode',
                data: { label: 'JoinT1T2', searchHighlight: false },
                position: { x: 240, y: 229 },
            },
            {
                id: '4',
                type: 'MdNode',
                data: { label: 'Transform', searchHighlight: false },
                position: { x: 518, y: 227 },
            },
            {
                id: '5',
                type: 'OpNode',
                data: { label: 'Output', searchHighlight: false },
                position: { x: 702, y: 170 },
            },
        ],
        edges: [
            {
                id: 'e1-3',
                source: '1',
                target: '3',
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
            },
            {
                id: 'e3-4',
                source: '3',
                target: '4',
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
            },
            {
                id: 'e1-4',
                source: '1',
                target: '4',
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
            },
            {
                id: 'e2-4',
                source: '2',
                target: '4',
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
            },
        ]
    },
    {
        flow: 'Flow4',
        nodes: [
            {
                id: '1',
                type: 'IpNode',
                data: { label: 'Table1', searchHighlight: false },
                position: { x: 51, y: 65 },
            },
            {
                id: '2',
                type: 'IpNode',
                data: { label: 'Table2', searchHighlight: false },
                position: { x: 51, y: 414 },
            },
            {
                id: '3',
                type: 'MdNode',
                data: { label: 'JoinT1T2', searchHighlight: false },
                position: { x: 240, y: 229 },
            },
            {
                id: '4',
                type: 'MdNode',
                data: { label: 'Transform', searchHighlight: false },
                position: { x: 518, y: 227 },
            },
            {
                id: '5',
                type: 'OpNode',
                data: { label: 'Output', searchHighlight: false },
                position: { x: 702, y: 170 },
            },
        ],
        edges: [
            {
                id: 'e2-3',
                source: '2',
                target: '3',
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    width: 20,
                    height: 20,
                    color: 'black',
                },
                style: {
                    strokeWidth: 1,
                    stroke: "black",
                },
            },
            {
                id: 'e1-3',
                source: '1',
                target: '3',
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
            },
            {
                id: 'e3-4',
                source: '3',
                target: '4',
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
            },
            {
                id: 'e4-5',
                source: '4',
                target: '5',
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
            },
            {
                id: 'e1-5',
                source: '1',
                target: '5',
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
            },
            {
                id: 'e1-4',
                source: '1',
                target: '4',
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
            },
            {
                id: 'e2-4',
                source: '2',
                target: '4',
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
            },
        ],
    },
]