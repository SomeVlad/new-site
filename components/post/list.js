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
                margin-bottom: 0.5rem;
                /*font-size: 28px;*/
                position: relative;
                margin-left: 30px;
            }

            li::before {
                content: 'o';
                font-feature-settings: "ss12";
                font-size: var(--base-font-size);
                font-family: var(--xprmntl-font);
                /*font-size: 20px;*/
                position: absolute;
                left: -30px;
                top: 4px;
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
                margin-bottom: 0.5rem;
                /*font-size: 28px;*/
                position: relative;
                /*margin-left: 30px;*/
            }

            li::before {
                counter-increment: ${counter};
                content: counter(${counter});
                font-feature-settings: "ss11";
                font-family: var(--xprmntl-font);
                font-size: var(--base-font-size);
                line-height: 1.9;
                position: absolute;
                left: -32px;
                /*top: 4px;*/
                color: #888888;
            }
        `}</style>
    </li>
)

export { UL, OL, ULI, OLI }
