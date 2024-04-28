import React from 'react';
import Link from 'next/link';
import styles from "./news.module.css";
import { DUMMY_NEWS } from '@/dummy-news';

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
                {DUMMY_NEWS.map((items) => {
                    return (
                        <li key={items.id}>
                            <Link href={`/news/${items.slug}`}>
                                <img src={`/images/news/${items.image}`} alt='newsImage' />
                            </Link>
                            <span>{items.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
