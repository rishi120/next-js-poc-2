import React from 'react';
import { getAvailableNewsYears } from '@/lib/helper';
import ListItem from '@/src/components/list/list-item';
import styles from "../archive-new.module.css";

export default function ArchivePage() {
    const links = getAvailableNewsYears();
    return (
        <div className={styles.archiveModuleWrapper}>
            <h1>Archive News</h1>
            <ListItem links={links} />
        </div>
    )
}
