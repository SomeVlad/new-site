import Head from 'next/head'
import Post from '../layouts/post'
import { H1 } from '../components/post/heading'
import P from '../components/post/paragraph'
import Code, { Codeblock } from '../components/post/code'
import UL, { LI } from '../components/post/list'
import HR from '../components/post/hr'
import CodePen from '../components/post/codePen'

export default () => (
    <Post>
        <Head>
            <title>In a nutshell: `fr` units</title>
        </Head>

        <H1>In a nutshell: `fr`&nbsp;units</H1>

        <UL> {/* TODO: OL*/}
            <LI><Code>fr</Code> stands for <em>fraction</em>.</LI>
            <LI>It means one part. <Code>1fr</Code> means <Code>x</Code>, <Code>2fr</Code> means <Code>2x</Code>.</LI>
            <LI>Say we have 60 balls in a box. <Code>1fr</Code> of them are red and <Code>2fr</Code> of them are green.
                It means 20 red and 40 green balls.</LI>
            <LI>Introduced and can be used only as part of grid layout
                in <Code>grid-rows</Code> and <Code>grid-columns</Code>.</LI>
            <LI>Difference between fractions and percents is that fractions <strong>do not count gaps</strong> between
                grid elements:</LI>
        </UL>

        <CodePen hash='yXPRKY' user='some_vlad' height={400} defaultTab='result' preview={false}
                  loader={() => <div>
                      <a target='_blank' rel='noopener noreferrer'
                         href='https://codepen.io/some_vlad/pen/yXPRKY/'>Pen</a> by{' '}
                      <a target='_blank' rel='noopener noreferrer' href='https://codepen.io/some_vlad'>Vlad Samoylov</a>.
                  </div>} />
    </Post>
)