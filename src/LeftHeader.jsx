import React, { useContext } from 'react';
import styles from './index.module.css';
import CanvasContext from './context/CanvasContext';

const LeftHeader = () => {
    const { nodes, setNodes } = useContext(CanvasContext);
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

    return (
        <div className={styles.leftHeader}>
            <div className={styles.gotoHead}>Go to Step</div>
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
    )
};

export default LeftHeader;
