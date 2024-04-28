import React from 'react'
import { getNewsForYear, getAvailableNewsYears } from "@/lib/helper";
import styles from "../../../archive/archive-new.module.css";
import ListItem from '@/src/components/list/list-item';

export default function ArchiveDetailspage({ params }) {
    const year = params.year;
    const getFIlteredNews = getNewsForYear(year);
    const avaliableYear = getAvailableNewsYears();

    return (
        <div className={styles.archiveModuleWrapper}>
            <h1>News Archive</h1>
            <ListItem links={avaliableYear} />
            <ul className={styles.ulWrapper}>
                {getFIlteredNews.map((items) => {
                    return (
                        <li>
                            <img src={`/images/news/${items.image}`} alt='new image' />
                            <span>{items.title}</span>
                            <p>{items.content}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
