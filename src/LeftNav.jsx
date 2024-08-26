import React, { useContext, useRef } from 'react';
import styles from './index.module.css';
import CanvasContext from './context/CanvasContext';
import { allFlowList, allSources } from './mock';

const LeftNav = () => {
    const { nodes, setNodes, setEdges } = useContext(CanvasContext);
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

    const onSourceDrag = (src) => {
        yPos.current += 50;
        setNodes((prevNds) => {
            const tempSrc = {
                ...src,
                position: { x: 51, y: yPos.current },
                id: (Math.floor(Math.random() * 10000) + 10000).toString().substring(1),
            }
            return [
                ...prevNds,
                tempSrc
            ]
        });
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
                                onDragEnd={() => onSourceDrag(ele)}
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
