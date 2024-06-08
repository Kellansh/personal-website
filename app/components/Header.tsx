/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    return <>
        <h1>Kellan's Cool Website</h1>
        <nav>
            <a href="/">home</a> 
            <span aria-hidden="true" > | </span>
            <a href="/resume">resume</a>
            <span aria-hidden="true" > | </span>
            <a href="/contact">contact</a>
        </nav>
    </>
}