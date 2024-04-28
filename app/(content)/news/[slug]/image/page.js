import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from "next/navigation";
import styles from "../../news.module.css";
import Link from "next/link";

export default function ImagePage({ params }) {
    const newsItem = DUMMY_NEWS.find(items => items.slug === params.slug);

    if (!newsItem) {
        notFound();
    }


    return (
        <div className={styles.fullscreenImageWrapper}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <Link href={`/news/${newsItem.slug}`}>
                <p>
                    <span>Go Back</span>
                </p>
            </Link>
        </div>
    )
}
