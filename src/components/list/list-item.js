import React from 'react';
import Link from "next/link";
import styles from "../../../app/(content)/archive/archive-new.module.css";

export default function ListItem({ links }) {

    return (
        <ul className={styles.listStyles}>
            {links.map((years) => {
                return (
                    <li key={years}>
                        <Link href={`/archive/${years}`}>{years}</Link>
                    </li>
                )
            })}
        </ul>
    )
}
