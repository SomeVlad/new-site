const getAlternateLetters = () => `0${(Math.floor(Math.random() * 17) + 1)}`.slice(-2)
const getTextTransform = () => ['capitalize', 'lowercase'][Math.floor(Math.random() * 3)]

export default class extends React.Component {
    render() {
        return (
            <main className="content">
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
                        --alternate-letters: "ss${getAlternateLetters()}" 1;
                        --text-transform: ${getTextTransform()};
                        --color-blue: #000AFF;
                        --xprmntl-font: 'xprmntl', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                    }

                    * {
                        margin: 0;
                        box-sizing: border-box;
                    }

                    html {
                        font-size: 24px;
                        line-height: 1.6;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                        color: var(--color-black);
                        font-feature-settings: "liga" 1, "dlig" 1, "onum" 1, "lnum" 1, "tnum" 1, "zero" 1, "frac" 1, "case" 1, "hlig" 1, "swsh" 1, "hist" 1, "ss**" 1, "kern" 1, "locl" 1, "rlig" 1, "medi" 1, "init" 1, "isol" 1, "fina" 1, "mark" 1, "salt" 1, "mkmk" 1; /* "smcp" 1, "c2sc" 1, */
                        font-variant-ligatures: common-ligatures contextual discretionary-ligatures historical-ligatures;
                        text-rendering: optimizeLegibility;
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
                        /*max-width: 1020px;*/
                        /*min-width: 980px;*/
                        width: 1200px;
                        padding: 10px 40px;
                        margin: 0 auto;
                    }
                `}</style>
            </main>
        )
    }
}