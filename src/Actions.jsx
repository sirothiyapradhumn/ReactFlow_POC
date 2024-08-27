import React from 'react';
import styles from './index.module.css'

const Action = ({ btnConfig }) => {

    return (
        <div className={styles.actionContainer}>
            {
                btnConfig.map((btn) => {
                    return (
                        <div className={styles.actBtn} key={btn.id}>{btn.label}</div>
                    );
                })
            }
        </div>
    );
};

export default Action;
