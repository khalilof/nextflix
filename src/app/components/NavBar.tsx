'use client';
import Link from "next/link";

export function NavBar() {

    return(
        <nav className="nav-bar-component">
            <Link href='/'>Nextflix</Link>
            <Link href='/watch-list'>Watch List</Link>
        </nav>
    );
}