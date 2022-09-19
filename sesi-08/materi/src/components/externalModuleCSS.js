import React from 'react';
import styles from "./externalModuleCSS.module.css";

const ExternalModuleCSS = () => {
    return (
        <div className={styles.container}>
            <h1>Hello World 2022</h1>
        </div>
    );
};

export default ExternalModuleCSS;