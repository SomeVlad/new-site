import Link from 'next/link'

class Post extends React.Component {
    render() {
        const { year, entries } = this.props
        return (
            entries.map(({ id, date, title, description, picture, styles }) =>
                <Link prefetch href={`/${id}`} key={id}>
                    <a className={picture ? 'with-picture' : ''} style={styles}>
                        {/*<span className="date">{date}</span>*/}
                        <h2>{title}</h2>
                        {!picture && <p>{description}</p>}
                        {/*language=CSS*/}
                        <style jsx>{`
                            h2 {
                                /*font-family: 'Alegreya Sans', sans-serif;*/
                                font-family: var(--xprmntl-font);
                                line-height: 1.2;
                                font-size: 72px;
                                margin-bottom: 16px;
                            }

                            a {
                                transform: translateY(-60px);
                                display: block;
                                text-decoration: none;
                                color: var(--accent-color);
                                /*margin-left: 370px;*/
                                width: 630px;
                                /*float: right;*/
                                margin-left: 315px;
                                margin-bottom: 90px;
                                position: relative;
                            }

                            .with-picture {
                                background-image: url(${picture});
                                background-position: center;
                                background-size: cover;
                                border-radius: 24px;
                            }
                            
                            @media (max-width: 500px) {
                                a {
                                    margin-bottom: 15px;
                                }
                            }
                        `}</style>
                    </a>
                </Link>
            )

        )
    }
}

export default class extends React.Component {
    render() {
        const { entries } = this.props.posts
        return (
            <div className="blog">
                <div className="title">Blog</div>
                {Object.keys(entries).sort().reverse().map((year, index) => (
                        <div className={`yearBlock${index === 0 ? ' first' : ''}`} key={index}>
                            <div className="year">{year}</div>
                            <Post year={year} entries={entries[year]} />
                        </div>
                    )
                )}

                {/*language=CSS*/}
                <style jsx>{`
                    .blog {
                    }

                    .title {
                        display: inline-block;
                        transform-origin: left bottom;
                        transform: rotate(-90deg) translateY(118px);
                        cursor: vertical-text;
                        font-family: var(--xprmntl-font);
                        font-size: 94px;
                        letter-spacing: -0.03em;
                    }

                    .year {
                        color: #adadad;
                        position: absolute;
                        font-family: var(--xprmntl-font);
                        display: inline-block;
                        transform-origin: left bottom;
                        transform: rotate(-90deg) translateY(235px);
                        cursor: vertical-text;
                        font-size: 56px;
                    }

                    .yearBlock.first {
                        margin-top: -150px;
                    }

                    .yearBlock::after {
                        content: "";
                        display: table;
                        clear: both;
                    }
                `}</style>
            </div>
        )
    }
}