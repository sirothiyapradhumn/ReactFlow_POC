import React, { useContext } from 'react';
import styles from './index.module.css';
import CanvasContext from './context/CanvasContext';
import { allFlowList } from './mock';

const LeftNav = () => {
    const { nodes, setNodes, setEdges } = useContext(CanvasContext);
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

        </div>
    )
};

export default LeftNav;
