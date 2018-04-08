const getAlternateLetters = () => `0${(Math.floor(Math.random() * 17) + 1)}`.slice(-2)
const getTextTransform = () => ['capitalize', 'lowercase'][Math.floor(Math.random() * 3)]

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ab: false }
        this.detectAdBlocker = this.detectAdBlocker.bind(this)
    }

    componentWillMount() {
        /* TODO: adblock check */
        this.setState({ ab: false })
    }

    componentDidMount() {
        this.detectAdBlocker()
    }

    detectAdBlocker() {
        debugger
        const head = document.getElementsByTagName('head')[0]

        const noAdBlockDetected = () => {
            this.setState({
                ab: false
            })
        }

        const adBlockDetected = () => {
            this.setState({
                ab: true
            })
        }

        // clean up stale bait
        const oldScript =
            document.getElementById('adblock-detection')
        if (oldScript) {
            head.removeChild(oldScript)
        }

        // we will dynamically generate some 'bait'.
        const script = document.createElement('script')
        script.id = 'adblock-detection'
        script.type = 'text/javascript'
        script.src = '/static/ads.js'
        script.onload = noAdBlockDetected
        script.onerror = adBlockDetected
        head.appendChild(script)
    }

    render() {
        return (
            this.state.ab ? <div style={{ fontSize: '100px' }}>🖕🏾🖕🏾🖕🏾</div> : <main className="content">
                {this.props.children}

                {/* global styles */}
                {/* language=CSS */}
                <style jsx global>{`
                    @font-face {
                        font-family: 'xprmntl';
                        src: url('/static/font/xprmntl.eot'); /* IE9 Compat Modes */
                        src: url('/static/font/xprmntl.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('/static/font/xprmntl.woff2') format('woff2'), /* Super Modern Browsers */ url('/static/font/xprmntl.woff') format('woff'), /* Pretty Modern Browsers */ url('/static/font/xprmntl.ttf') format('truetype'), /* Safari, Android, iOS */ url('/static/font/xprmntl.svg#svgFontName') format('svg'); /* Legacy iOS */
                    }

                    :root {
                        --color-black: #333333;
                        --text-width: 720px;
                        --content-width: 1200px;
                        --alternate-letters: "ss${getAlternateLetters()}" 1;
                        --text-transform: ${getTextTransform()};
                        --color-blue: #000AFF;
                        --xprmntl-font: 'xprmntl', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                        --base-font-size: 24px;
                    }

                    * {
                        margin: 0;
                        box-sizing: border-box;
                    }

                    html {
                        font-size: var(--base-font-size);
                        line-height: 1.6;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                        color: var(--color-black);
                        font-feature-settings: "liga" 1, "dlig" 1, "onum" 1, "lnum" 1, "tnum" 1, "zero" 1, "frac" 1, "case" 1, "hlig" 1, "swsh" 1, "hist" 1, "ss**" 1, "kern" 1, "locl" 1, "rlig" 1, "medi" 1, "init" 1, "isol" 1, "fina" 1, "mark" 1, "salt" 1, "mkmk" 1; /* "smcp" 1, "c2sc" 1, */
                        font-variant-ligatures: common-ligatures contextual discretionary-ligatures historical-ligatures;
                        text-rendering: optimizeLegibility;
                        font-weight: 300;
                    }

                    a {
                        color: var(--color-blue);
                        text-decoration: none;
                        cursor: pointer;
                        position: relative;
                    }

                    /*a::after {
                        content: '';
                        background: url(/static/images/underline.svg) repeat-x;
                        position: absolute;
                        left: 0;
                        width: 100%;
                        height: 17px;
                        bottom: -11px;
                    }*/

                    .content {
                        width: var(--content-width);
                        padding: 10px 40px;
                        margin: 0 auto;
                    }
                `}</style>
            </main>
        )
    }
}