const UL = ({ children }) => (
    <ul>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            ul {
                list-style: none;
                padding: 0;
            }
        `}</style>
    </ul>
)

const OL = ({ counter = 'defaultCounter', children }) => (
    <ol>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            ol {
                list-style: none;
                padding: 0;
                margin: 0 0 1.5em;
            }
        `}</style>
        {/*language=CSS*/}
        <style jsx global>{`
            ol {
                counter-reset: ${counter};
            }
        `}</style>
    </ol>
)

const ULI = ({ children }) => (
    <li>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            li {
                margin: 0 0 0.5rem 0;
                position: relative;
                text-indent: -2em;
                list-style-type: none;
            }

            li::before {
                content: url(/static/images/bullet-icon.svg);
                width: 1.5em;
                padding-right: 0.5em;
                text-align: right;
                display: inline-block;
            }
        `}</style>
        {/*language=CSS*/}
        <style jsx global>{`
            li > * {
                text-indent: 0;
            }
        `}</style>
    </li>
)

const OLI = ({ counter = 'defaultCounter', children }) => (
    <li>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            li {
                margin: 0 0 0.5rem 0;
                position: relative;
                text-indent: -2em;
                list-style-type: none;
            }

            li::before {
                counter-increment: ${counter};
                content: counter(${counter});
                font-feature-settings: "ss11";
                font-family: var(--xprmntl-font);
                font-size: var(--base-font-size);
                line-height: 1.9;
                color: #888888;
                width: 1.5em;
                padding-right: 0.5em;
                text-align: right;
                display: inline-block;
            }
        `}</style>
        {/*language=CSS*/}
        <style jsx global>{`
            li > * {
                text-indent: 0;
            }
        `}</style>
    </li>
)

export { UL, OL, ULI, OLI }
