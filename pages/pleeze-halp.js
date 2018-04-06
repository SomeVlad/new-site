import Head from 'next/head'
import Post from '../layouts/post'
import { H1, H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import { Image } from '../components/post/figure'
import Code, { Codeblock } from '../components/post/code'
import UL, { LI } from '../components/post/list'
import HR from '../components/post/hr'

export default () => (
    <Post>
        <Head>
            <title>How to exit vim</title>
        </Head>

        <H1>How to exit vim</H1>

        <H2>First way</H2>

        <UL>
            <LI>Open another terminal tab with <Code>cmd</Code>/<Code>ctrl + t</Code></LI>
            <LI><Code>killall -9 vim</Code></LI>
        </UL>

        <H2>Second way</H2>

        <Image src='/static/images/exit-vim.gif' alt='Like this.' title='Like this.' />

        <H2>Next time use nano</H2>

        <P>If you find yourself locked inside vim only during use of <Code>git</Code>, consider
            setting <Code>nano</Code> as your default editor.</P>

        <Codeblock language='bash'>{`git config --global core.editor "nano"`}</Codeblock>

        <HR/>

        <P>Enjoy!</P>
    </Post>
)