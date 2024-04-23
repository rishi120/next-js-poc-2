import React from 'react';
import styles from "./module-wrapper.module.css";

export default function ModuleWrapper({ children }) {
    return (
        <section className={styles.ModuleWrapperStyles}>
            {children}
        </section>
    )
}
