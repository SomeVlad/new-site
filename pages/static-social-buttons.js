import Post from '../layouts/post'
import { H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import Code, { Codeblock } from '../components/post/code'
import A from '../components/post/a'

export default () => (
    <Post title='Static social share buttons'>

        <em>edit:</em> I made a <A href='/social-buttons-generator'>generator</A>.

        <H2>Why should it even bother me?</H2>

        <P>There are a lot of social networks now, that provide ability to share some webpage. And most of them have
            this featuare covered in their API documentation. And
            {' '}<A external href='https://developers.facebook.com/docs/plugins/share-button'>oftentimes</A>
            {' '}<A external href='https://developers.google.com/+/web/share/'>it</A>
            {' '}<A external href='https://vk.com/dev.php?method=Share'>requires</A>
            {' '}<A external href='https://dev.twitter.com/web/tweet-button'>an SDK</A>
            {' '}<A external href='https://developers.pinterest.com/docs/widgets/save/'>of that social network</A>.
        </P>

        <P>What you see is an easy way to add several buttons on your site.</P>

        <P>What I see is at least 150kB of external scripts and at least 5 more requests.
            That's <strong>13&nbsp;times</strong> the size of the page you are viewing right now. I prefer not to even
            think about the time needed to execute all that scripts. As for me it's insane amount of data and time to
            create a couple of buttons which let users not to worry their pretty little heads about copypasting a link.
        </P>

        <H2>Ok, I see... So what's the solution?</H2>

        <P>I recently discovered that the exact same thing can be accomplished much easier. What it requires is just a
            link with special parameters and... No, nothing else, that's it, just a link.
            Create an <Code>a</Code> element with proper href attribute and you are good to go.</P>

        For Facebook (it opens a dialog that looks horrible on wide screens, so I decided it will be more correctly
        to open link in a popup):

        <Codeblock>{`onclick="window.open('https://www.facebook.com/sharer/sharer.php?u={URL you want users to share}', 'pop', 'width=600, height=400, scrollbars=no');"`}</Codeblock>

        <P>Yep, that easy.</P>

        For Twitter:
        <Codeblock>{`href="https://twitter.com/intent/tweet?text={ text you want to appear in textbox before the url }&url={ URL you want users to share }"`}</Codeblock>

        VK
        <Codeblock>{`href="https://vk.com/share.php?url={ URL }"`}</Codeblock>

        Telegram
        <Codeblock>{`href="https://telegram.me/share/url?text={ Text that will appear under the link }&url={ URL }"`}</Codeblock>

        Pinterest
        <Codeblock>{`href="https://pinterest.com/pin/create/button/?description={ Text for a pin }&url={ URL to share }"`}</Codeblock>

        Skype
        <Codeblock>{`href="https://web.skype.com/share?url={ URL }"`}</Codeblock>

        Linkedin
        <Codeblock>{`href="http://www.linkedin.com/shareArticle?mini=true&url={ URL }&title={ Title }&summary={ Summary }"`}</Codeblock>

        <P>Of course, it should be used with <Code>target="_blank"</Code>, so don't forget about{` `}
            <A external href='https://mathiasbynens.github.io/rel-noopener/'>security</A>.</P>

        <H2>I smell big fat "but" waiting 'round the corner</H2>

        <P>If you prefer easier but less flexible and more data-hungry and time-wasting way over one requiring
            a little work but granting full control of your site – yes, there is one "but".
            You have to manually add icons and generate texts and URL's for sharing.
            As for me, that's not the case, because it's quite simple thing to do. And it is overweights the stupid
            amount of executable scripts, unnecessary cross-domain AJAX queries and lack of control.</P>

        <P>So think twice.</P>
    </Post>
)