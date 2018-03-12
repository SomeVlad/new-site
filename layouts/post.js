import Page from './main'
import Head from 'next/head'
import Header from '../components/header'

export default class extends React.Component {
    render() {
        return (
            <Page>
                <Head>
                    <title>Влад Самойлов</title>
                </Head>
                <Header />
                <article className="post">
                    {this.props.children}

                    {/*language=CSS*/}
                    <style jsx>{`
                        .post {
                            padding-left: 160px;
                        }
                    `}</style>
                </article>
            </Page>
        )
    }
}