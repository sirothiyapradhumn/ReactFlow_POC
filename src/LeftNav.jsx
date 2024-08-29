import React, { useContext, useRef } from 'react';
import styles from './index.module.css';
import CanvasContext from './context/CanvasContext';
import { allFlowList, allSources } from './mock';
import { useReactFlow } from '@xyflow/react';

const LeftNav = () => {
    const { nodes, setNodes, setEdges, setSrcDrop } = useContext(CanvasContext);
    const { screenToFlowPosition } = useReactFlow();
    const yPos = useRef(500);

    const onStepClick = (nodeId) => {
        setNodes((prevNodes) => {
            return prevNodes.map((ele) => {
                if (ele.id === nodeId) {
                    return {
                        ...ele,
                        data: {
                            ...ele.data,
                            searchHighlight: true,
                        }
                    }
                }
                return {
                    ...ele,
                    data: {
                        ...ele.data,
                        searchHighlight: false,
                    }
                }
            })
        })
    };

    const onFlowDrag = (flow) => {
        setNodes(flow.nodes);
        setEdges(flow.edges);
    };

    // const onSourceDrag = (event, src) => {
    //     const position = screenToFlowPosition({
    //         x: event.clientX,
    //         y: event.clientY,
    //       });
    //     setNodes((prevNds) => {
    //         const tempSrc = {
    //             ...src,
    //             position,
    //             id: (Math.floor(Math.random() * 10000) + 10000).toString().substring(1),
    //         }
    //         return [
    //             ...prevNds,
    //             tempSrc
    //         ]
    //     });
    // };

    const onSourceDragStart = (event, src) => {
        setSrcDrop(src);
        event.dataTransfer.effectAllowed = 'move';
      };

    return (
        <div className={styles.leftHeader}>
            <div className={styles.gotoHead}>Go to Step</div>
            <div className={styles.listBox}>
                {
                    nodes.map((ele) => {
                        return (
                            <div
                                key={ele.id}
                                className={styles.nodeName}
                                role='button'
                                onClick={() => onStepClick(ele.id)}
                            >
                                {ele.data.label}
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.gotoHead}>All Flows</div>
            <div className={styles.listBox}>
                {
                    allFlowList.map((ele) => {
                        return (
                            <div
                                key={ele.flow}
                                className={styles.nodeName}
                                draggable="true"
                                onDragEnd={() => onFlowDrag(ele)}
                            >
                                {ele.flow}
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.gotoHead}>All Sources</div>
            <div className={styles.listBox}>
                {
                    allSources.map((ele) => {
                        return (
                            <div
                                key={ele.id}
                                className={styles.nodeName}
                                draggable="true"
                                // onDragEnd={(e) => onSourceDrag(e, ele)}
                                onDragStart={(e) => onSourceDragStart(e, ele)}
                            >
                                {ele.data.label}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
};

export default LeftNav;
