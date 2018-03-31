export default ({ children }) => (
    <p>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            p {
                line-height: 41px;
                font-size: 24px;
                margin: 0 0 24px;
                width: var(--text-width);
            }
        `}</style>
    </p>
)