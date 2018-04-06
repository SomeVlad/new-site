export default ({ children }) => (
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

const LI = ({ children }) => (
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
                font-family: var(--xprmntl-font);
                font-size: 20px;
                position: absolute;
                left: -30px;
                top: 4px;
            }

            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        `}</style>
    </li>
)

export { LI }
