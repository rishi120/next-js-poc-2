import React from 'react';
import styles from "../news.module.css";

export default function NewsPageDetails({ params }) {
    const replaceText = params['news-id'].replace(/[-\s]/g, ' ');

    return (
        <div className={styles.newsPageWrapper}>
            <h1>{replaceText}</h1>
        </div>

    )
}
