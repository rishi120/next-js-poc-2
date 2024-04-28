import React from 'react';
import { getLatestNews } from '@/lib/helper';
import styles from "../archive-new.module.css";

export default function LatestArchivePage() {
    const latestNews = getLatestNews();
    return (
        <div className={styles.archiveModuleWrapper}>
            <h1>Latest News</h1>
            <ul className={styles.ulWrapper}>
                {latestNews.map((items) => {
                    return (
                        <li>
                            <img src={`/images/news/${items.image}`} alt="news image" />
                            <span>{items.title}</span>
                            <p>{items.content}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
