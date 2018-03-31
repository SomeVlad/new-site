import React from 'react'
import Codepen from 'react-codepen-embed'

const isBrowser = typeof window === 'object'

class CodePen extends React.Component {
    static defaultProps = {
        delay: 200
    }

    constructor(props) {
        super(props)

        this.timer = null
    }

    componentDidMount() {
        if (!isBrowser) {
            return
        }

        if (this.hasScript()) {
            this.timer = setTimeout(window.__CPEmbed, this.props.delay)
        } else {
            this.timer = setTimeout(this.injectScript, this.props.delay)
        }
    }

    componentWillUnmount() { clearTimeout(this.timer) }

    hasScript() { return !!window.__CPEmbed }

    injectScript() {
        const script = document.createElement('script')

        script.async = true
        script.type = 'text/javascript'
        script.src = '//production-assets.codepen.io/assets/embed/ei.js'

        document.head.appendChild(script)
    }

    render() {
        return <Codepen {...this.props} />
    }
}

export default CodePen