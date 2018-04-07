import Head from 'next/head'
import Link from 'next/link'
import Post from '../layouts/post'
import { H1, H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import A from '../components/post/a'
import Youtube from '../components/post/youtube'
import { Image } from '../components/post/figure'
import UL, { LI } from '../components/post/list'
import Code, { Codeblock } from '../components/post/code'
import HR from '../components/post/hr'

export default () => (
    <Post>
        <Head>
            <title>A few thoughts on frontend optimization</title>
        </Head>

        <H1>A few thoughts on frontend optimization</H1>

        {/*make a external component*/}
        <P>Several days ago I've stumbled upon{' '}
            <A href="http://www.mattzeunert.com/2017/01/30/lazy-javascript-parsing-in-v8.html">a topic</A>(<A
                href="https://medium.com/devschacht/lazy-javascript-parsing-in-v8-99b5c3a6cbba">🇷🇺</A>)</P>
        {/* add youtube component */}
        <Youtube videoId={`65-RbBwZQdU`} />
    </Post>
)