import Post from '../layouts/post'
import A from '../components/post/a'
import Code from '../components/post/code'
import { UL, ULI } from '../components/post/list'
import CodePen from '../components/post/codePen'

export default () => (
    <Post title='In a nutshell: `fr` units'>

        <UL>
            <ULI><Code>fr</Code> stands for <em>fraction</em>.</ULI>
            <ULI>It means one part. <Code>1fr</Code> means <Code>x</Code>, <Code>2fr</Code> means <Code>2x</Code>.</ULI>
            <ULI>Say we have 60 balls in a box. <Code>1fr</Code> of them are red and <Code>2fr</Code> of them are green.
                It means 20 red and 40 green balls.</ULI>
            <ULI>Introduced and can be used only as part of grid layout
                in <Code>grid-rows</Code> and <Code>grid-columns</Code>.</ULI>
            <ULI>Difference between fractions and percents is that fractions <strong>do not count gaps</strong> between
                grid elements:</ULI>
        </UL>

        <CodePen hash='yXPRKY' user='some_vlad' height={400} defaultTab='result' preview={false}
                 loader={() => <div>
                     <A external href='https://codepen.io/some_vlad/pen/yXPRKY/'>Pen</A> by{' '}
                     <A external href='https://codepen.io/some_vlad'>Vlad Samoylov</A>.
                 </div>} />
    </Post>
)