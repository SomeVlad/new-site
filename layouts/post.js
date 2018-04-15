import Page from './main'
import Head from 'next/head'
import Header from '../components/header'
import { H1 } from '../components/post/heading'

export default props => (
    <Page>
        <Head>
            <title>{props.title ? `${props.title} | Vlad Samoylov` : `Vlad Samoylov`}</title>
        </Head>
        <Header />
        <article className="post">

            {props.title && <H1>{props.title}</H1>}

            {props.children}

            {/*language=CSS*/}
            <style jsx global>{`
                .post > *:not(h1):not(ul),
                .post > ul > li > *:not(pre) {
                    max-width: var(--text-width);
                }
            `}</style>
        </article>
    </Page>
)