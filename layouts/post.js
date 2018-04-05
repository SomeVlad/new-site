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
                    <style jsx global>{`
                        .post {
                            /*padding-left: 160px;*/
                        }

                        .post > *:not(h1):not(ul),
                        .post > ul > li > *:not(pre) {
                            max-width: var(--text-width);
                        }
                    `}</style>
                </article>
            </Page>
        )
    }
}