import React, { useState } from 'react';

import styles from './BingoItem.module.css';

const BingoItem = props => {
    const { text } = props;
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.wrapper}>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export default BingoItem;
