import Typograf from 'typograf'

const tp = new Typograf({ locale: ['ru', 'en-US'] })

export default class extends React.Component {
    render() {
        return (
            <p ref={ref => this.ref = ref}>
                {this.props.children}
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
    }

    componentDidMount() {
        this.ref.innerHTML = tp.execute(this.ref.innerHTML) // TODO: remove
    }
}