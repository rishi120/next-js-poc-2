'use client';

import React from 'react';
import styles from "./nav-menu.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMenu() {

    const path = usePathname();

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
        },
        {
            pageName: 'Archive',
            pageId: 3,
            pageLink: '/archive'
        }
    ]

    return (
        <header className={styles.headerStyles}>
            <ul>
                {menuItems.map((items) => {
                    return (
                        <li key={items.pageId}>
                            <Link href={items.pageLink} className={items.pageLink === path ? styles.activeLink : undefined}>{items.pageName}</Link>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}
