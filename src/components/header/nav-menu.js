import React from 'react';
import styles from "./nav-menu.module.css";
import Link from 'next/link';

export default function NavMenu() {
    const menuItems = [
        {
            pageName: 'Home',
            pageId: 1,
            pageLink: '/'

        },
        {
            pageName: 'News',
            pageId: 2,
            pageLink: '/news'
        }
    ]

    return (
        <header className={styles.headerStyles}>
            <ul>
                {menuItems.map((items) => {
                    return (
                        <li key={items.pageId}>
                            <Link href={items.pageLink}>{items.pageName}</Link>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}
