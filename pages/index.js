import Page from '../layouts/main'
import Head from 'next/head'
import Header from '../components/header'
import Blog from '../components/blog'
import posts from '../posts'

export default class extends React.Component {
    render() {
        return (
            <Page>
                <Head>
                    <title>Frontend developer Vlad Samoylov</title>
                </Head>
                <Header mainpage />
                <Blog posts={ posts } />
            </Page>
        )
    }
}