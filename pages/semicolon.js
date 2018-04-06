import Head from 'next/head'
import Post from '../layouts/post'
import A from '../components/post/a'
import { H1, H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import { Image } from '../components/post/figure'
import Code, { Codeblock } from '../components/post/code'
import UL, { LI } from '../components/post/list'
import HR from '../components/post/hr'

export default () => (
    <Post>
        <Head>
            <title>The Answer to The Ultimate Question of Life, the Universe, and Everything</title>
        </Head>

        <H1>The Answer to The Ultimate Question of Life, the Universe, and Everything</H1>

        <P>There is an often-raised question in javascript community: should we add semicolon to terminate each
            statement in C-like manner, or should we abandon them like an anachronism and never look back.</P>

        <P>For decades best minds struggled to find the ultimate answer for this question. To no awail.</P>

        <P>But today I’m going to introduce to you <strong>THE ULTIMATE ANSWER</strong>.</P>

        <P><br /><br />Please take a seat.<br /><br /></P>

        <P><br /><br />Are you ready?<br /><br /></P>

        <P><br /><br />The truth about semicolons is that…<br /><br /></P>

        <H2>THERE IS NO FREAKING DIFFERENCE</H2>

        <P>Like… At all.</P>

        <Image src='/static/images/same.gif' alt='Same.' title='Same.' />

        <P>Seriously. Just pick an option that is ok in your team and stick with it.</P>

        <H2>But where does the problem come from?</H2>

        <P>As far as I can tell from my experience there is a common misconception about so-called ASI — automatic
            semicolon insertion — in javascript.</P>

        <P>Some people tend to think it may cause errors in a javascript code.</P>

        <Image src='/static/images/alternative-facts.gif' alt='Alternative facts.' title='Alternative facts.' />

        <P>Similarly to almost every other myth, this one comes from just an <strong>ignorance</strong>.</P>

        <P><A href="https://www.destroyallsoftware.com/talks/wat">This
            talk</A>, for example. All of this derived from lack of understanding how javascript actually works. How
            does plus operator work, how its type conversion works, what is <Code>ToPrimitive</Code>, how parser and
            interpreter analyze code. And frankly, it is not ridiculous at all. Once you understand it, it makes a lot
            of sense.</P>

        <P>Let's dig a little deeper: what makes us so lazy, that it starts to get in the way even for a programmer, a
            person who monetises laziness?</P>

        <H2>Monkey brain</H2>

        <P>We are still animals and it is evolutionarily justified to be afraid of something we don’t know.</P>

        <P>But I wish all programmers were a little bit more conscious than a monkey and could overcome their inner
            animal to wrap their heads around something they don't understand yet, so they don't spread alternative
            facts.</P>

        <HR />

        <P>I hope, you have rested from the shock of <strong>THE ULTIMATE ANSWER</strong>, so here is another
            revelation:</P>

        <H2>THERE IS ONLY ONE CASE WHEN YOU REALLY NEED SEMICOLON</H2>

        <Image src='/static/images/shock.gif' alt='Shock.' title='Shock.' />

        <P>That’s right. In front of brackets.</P>

        <UL> {/* TODO OL */}
            <LI>If a line starts with round brackets:
                <Codeblock>{`const a = 'A semicolon maybe?'
const q = 'What am I missing? ' + a
(function() {
    // ...
})()

// a is not a function`}</Codeblock>
            </LI>

            <LI>
                If a line starts with square brackets:
                <Codeblock>{`const reactions = {wat: '? 🤔'}
['Why', 'would', 'you', 'ever', 'do', 'that'].join(' ') + reactions.wat

// Cannot read property 'join' of undefined`}</Codeblock>
            </LI>
        </UL>

        <P>To avoid that you can actually just prepend this line with semicolon.</P>

        <HR />

        <P>So my idea basically:<br />
            do not be afraid of something you don’t know. <br />
            Find out about it. <br />
            Do not spread myths. <br />
            You are an engineer, not an animal.</P>
    </Post>
)