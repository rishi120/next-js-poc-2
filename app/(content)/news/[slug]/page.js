import React from 'react';
import styles from "../news.module.css";
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from "next/navigation";
import Link from "next/link";

export default function NewsDetailsPage({ params }) {

    const newsItem = DUMMY_NEWS.find(items => items.slug === params.slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className={styles.newsDetailsWrapper}>
            <Link href={`/news/${newsItem.slug}/image`}>
                <img src={`/images/news/${newsItem.image}`} alt='News Image' target="_blank" />
            </Link>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
            <p>{newsItem.content}</p>
        </article>

    )
}
