import Post from '../layouts/post'
import { H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import A from '../components/post/a'
import { Image } from '../components/post/figure'
import { UL, ULI } from '../components/post/list'

export default () => (
    <Post title='Swiss knife bot'>

        <H2 id='preamble'>Preamble</H2>
        <P>I’m an active Telegram user and sometimes I find it frustrating and unhandy to do some routine stuff.
            And not
            so long ago I bethought myself that I’m a wannabe programmer and it’s my duty to subdue a machine
            and make
            it do stuff that regular meatbag like me doesn’t want to.</P>

        <Image src='/static/images/bender-moving-cubes.gif'
               alt="A useful robot"
               title="A useful robot" />

        <P>I also realised that I use my <A href="/facebook-link-fixer/">facebook links unshitter</A>{' '}
            quite often and hey, wouldn’t it be nice <del>if we were older</del> to have
            a bot pinned to top that does this and other useful things.</P>

        <Image src='/static/images/bender-drinks.gif'
               alt="An animated picture of robot drinking"
               title="An animated picture of robot drinking" />

        <H2 id="so-i-made-it">So I made it!</H2>

        <P><A external href="https://t.me/swiss_knife_bot">There it is</A>!</P>

        <P><A external href="https://github.com/SomeVlad/swiss-knife-bot">And there is a github repo</A>.</P>

        <P><A external href="https://t.me/vladsamoylov">And here you can stay for updates</A>.</P>

        <H2 id="what-this-bot-is-capable-of">What is this bot capable&nbsp;of?</H2>

        <P>For now it can do these things:</P>
        <UL>
            <ULI>convert shitty mobile facebook links into pretty parseable desktop ones;</ULI>
            <ULI>convert youtube video to mp3. Just send the link;</ULI>
            <ULI>in addition to unshitted m.fb link it parses (if the link is of specific type, but I'll fix that
                eventually) given post (if it's public) and creates telegra.ph page with its content (text only,
                actually). <a href="https://t.me/some_vlad" rel="nofollow">Bugreports are welcome</a>.</ULI>
            <ULI>that’s it. For now.</ULI>
        </UL>

        <Image src="/static/images/bender-dancing.gif" alt="An animated picture of robot dancing"
               title="An animated picture of robot dancing" />

        <H2 id="what-do-you-want-it-to-be-capable-of">What do you want it to be capable of?</H2>

        <P><A external href="https://t.me/some_vlad">Do not hesitate to inform me via Telegram</A>.</P>

        <H2 id="and-what-if-the-bot-doesnt-do-what-its-supposed-to">And what if the bot doesn’t do what it’s
            supposed
            to?</H2>

        <P>Well… You know the answer, I don’t need to point that out. Right?</P>

        <Image src="/static/images/bender-wants-you-to-bite-something.gif"
               alt="Please contact me and I will solve your problem ASAP!"
               title="Please contact me and I will solve your problem ASAP!" />
    </Post>
)