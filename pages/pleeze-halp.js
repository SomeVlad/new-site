import Post from '../layouts/post'
import { H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import { Image } from '../components/post/figure'
import Code, { Codeblock } from '../components/post/code'
import { UL, ULI } from '../components/post/list'
import HR from '../components/post/hr'

export default () => (
    <Post title='How to exit vim'>

        <H2>First way</H2>

        <UL>
            <ULI>Open another terminal tab with <Code>cmd</Code>/<Code>ctrl + t</Code></ULI>
            <ULI><Code>killall -9 vim</Code></ULI>
        </UL>

        <H2>Second way</H2>

        <Image src='/static/images/exit-vim.gif' alt='Like this.' title='Like this.' />

        <H2>Next time use nano</H2>

        <P>If you find yourself locked inside vim only during use of <Code>git</Code>, consider
            setting <Code>nano</Code> as your default editor.</P>

        <Codeblock language='bash'>{`git config --global core.editor "nano"`}</Codeblock>

        <HR />

        <P>Enjoy!</P>
    </Post>
)