export default ({ children }) => (
    <p>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            p {
                line-height: 41px;
                font-size: 28px;
                margin: 0 0 24px;
                width: 680px;
            }
        `}</style>
    </p>
)