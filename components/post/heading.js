export const H1 = ({ children, style }) => (
    <h1 style={style}>{children}
        {/*language=CSS*/}
        <style jsx>{`
            h1 {
                font-family: var(--xprmntl-font);
                line-height: 1.2;
                font-size: 94px;
                /*margin-bottom: 50px;*/
                font-weight: bold; /* TODO уточнить */
                margin-bottom: 2px;
                font-feature-settings: "ss02";
            }
        `}
        </style>
    </h1>
)

export const H2 = ({ children, style }) => (
    <h2 style={style}>{children}
        {/*language=CSS*/}
        <style jsx>{`
            h2 {
                font-family: var(--xprmntl-font);
                line-height: 1.2;
                font-size: 72px;
                margin-top: 70px;
                font-weight: normal;
            }
        `}</style>
    </h2>
)