import Link from 'next/link'
import Clipboard from 'react-clipboard.js'

class Logo extends React.Component {
    renderLetter(letter, idx) {
        const getAlternateLetters = () => 'ss' + `0${(Math.floor(Math.random() * 17) + 1)}`.slice(-2)
        return (
            <span key={idx} style={{ fontFeatureSettings: `"${getAlternateLetters()}"` }}>{letter}
                {/*language=CSS*/}
                <style jsx>{`
                    span {
                        font-family: var(--xprmntl-font);
                        line-height: 1.2;
                        font-size: 64px;
                        /*font-feature-settings: var(--alternate-letters);*/
                        text-transform: var(--text-transform);
                        /*color: var(--accent-color);*/
                    }
                `}</style>
            </span>
        )
    }

    render() {
        return (
            <h1>
                {Array.from(this.props.children, this.renderLetter)}
                {/*language=CSS*/}
                <style jsx>{`
                    h1 {
                        position: relative;
                        line-height: 1.2;
                        font-size: 56px;
                        font-feature-settings: var(--alternate-letters);
                        text-transform: var(--text-transform);
                        display: inline;
                    }

                    h1 span {
                        font-family: var(--xprmntl-font);
                        line-height: 1.2;
                        font-size: 56px;
                        /*font-feature-settings: var(--alternate-letters);*/
                        text-transform: var(--text-transform);
                        color: var(--accent-color);
                    }
                `}</style>
            </h1>
        )
    }
}

export default class Header extends React.Component {
    static defaultProps = {
        mainpage: false
    }

    render() {
        return (
            <header className={this.props.mainpage ? 'mainpage' : ''}>
                {this.props.mainpage ? <Logo>Vlad Samoylov</Logo> :
                    <Link href='/'><a className='logo-link'><Logo>Vlad Samoylov</Logo></a></Link>}
                {this.props.mainpage && <div className="about">
                    frontend developer at Avito.
                </div>}
                <div className="contacts">
                    <a href="mailto:vladislav.l.samoylov@gmail.com">Write me</a> or{' '}
                    <Clipboard component="a" data-clipboard-text="vladislav.l.samoylov@gmail.com">
                        copy email
                    </Clipboard><br />
                    <a href="/cv">CV</a>
                </div>

                {/*language=CSS*/}
                <style jsx>{`
                    header {
                        max-width: 1280px;
                        margin: 0 auto 120px;
                        position: relative;
                    }

                    header.mainpage {
                        margin-bottom: 170px;
                    }

                    h1 a {
                        text-decoration: none;
                        border-bottom: none;
                        background-image: none;
                    }

                    .logo-link {
                        display: inline-block;
                    }

                    .contacts {
                        position: absolute;
                        right: 0;
                        top: 0;
                        text-align: right;
                        list-style: none;
                        color: #333;
                        /*font-family: 'Alegreya Sans', sans-serif;*/
                        /*word-spacing: 9999px;*/
                        line-height: 47px;
                        font-size: 30px;
                    }

                    .contacts a {
                        /*cursor: pointer;*/
                    }

                    .contacts a:hover::after {
                        content: '';
                        background: url(/static/images/underline.svg) repeat-x;
                        position: absolute;
                        left: 0;
                        width: 100%;
                        height: 17px;
                        bottom: -11px;
                    }

                    .about {
                        line-height: 53px;
                        font-size: 32px;
                    }
                `}</style>
            </header>
        )
    }
}