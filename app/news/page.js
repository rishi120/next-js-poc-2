import React from 'react';
import Link from 'next/link';
import styles from "./news.module.css";

export default function NewsPage() {
    const newsMenuItems = [
        {
            newsPageName: 'First News',
            newsPageId: 1,
            newsPageLink: '/news/first-news'
        },
        {
            newsPageName: 'Second News',
            newsPageId: 2,
            newsPageLink: '/news/second-news'
        },
        {
            newsPageName: 'Third News',
            newsPageId: 3,
            newsPageLink: '/news/third-news'
        }
    ]

    return (
        <div className={styles.newsPageWrapper}>
            <h1>News Page</h1>
            <ul>
                {newsMenuItems.map((items) => {
                    return (
                        <li key={items.newsPageId}>
                            <Link href={items.newsPageLink}>{items.newsPageName}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
