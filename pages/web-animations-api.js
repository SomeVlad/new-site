import Head from 'next/head'
import Post from '../layouts/post'
import { H1 } from '../components/post/heading'
import P from '../components/post/paragraph'
import Code, { Codeblock } from '../components/post/code'
import UL, { LI } from '../components/post/list'
import HR from '../components/post/hr'

export default () => (
    <Post>
        <Head>
            <title>In a nutshell: Web Animations API</title>
        </Head>

        <H1>In a nutshell: Web Animations API</H1>

        <UL> {/* TODO: OL*/}
            <LI>Web Animations API is a native API for animations in JavaScript.</LI>
            <LI>Syntax is pretty close to jQuery's <Code>.animate()</Code>:
                <Codeblock>{`const element = document.querySelector('.animate-me')
element.animate(keyframes, options)`}</Codeblock>
            </LI>
            <LI><Code>keyframes</Code> is an array of objects, representing frames.</LI>
            <LI>Syntax is similar to <Code>@keyframes</Code> from CSS. <em>kebab-case</em> must be converted
                to <em>lowerCamelCase</em>.
                <Codeblock>{`const keyframes = [
    {
        transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)',
        transformOrigin: '50% 0',
        filter: 'blur(40px)',
        opacity: 0
    },
    {
        transform: 'translateY(0) scaleY(1) scaleX(1)',
        transformOrigin: '50% 50%',
        filter: 'blur(0)',
        opacity: 1
    }
]`}</Codeblock>
            </LI>
            <LI><Code>options</Code> is an object containing, well, options:
                <Codeblock>{`const options = {
    iterations: Infinity, // number of iterations, animation-iteration-count
    iterationStart: 0, // first iteration, may be decimal
    delay: 0, // delay
    endDelay: 0, // delay between animations
    direction: 'alternate', // animation-direction basically
    duration: 700, // duration in ms
    fill: 'forwards', // animation-fill-mode
    easing: 'ease-out', // default is \`linear\` instead of \`ease\` in CSS (animation-timing-function)
}`}</Codeblock>
            </LI>
            <LI>You don't have to use <Code>will-change</Code> with it.</LI>
            <LI>With Web Animations API we can easily manipulate animations.
                <Codeblock>{`element.getAnimations() // returns an array of animations or transitions applied to our element using CSS or WAAPI
    .map(animation => {
        animation.pause()
        animation.play()
        animation.playbackRate = 2 // speed it up
        animation.playbackRate = .4 // use a number less than one to slow it down
        // events
        animation.onfinish = () => element.remove()
        // and promises
        animation.finished.then(() => element.remove())
    })`}</Codeblock>
            </LI>
        </UL>

        <HR />

        <P>Now go and try it out!</P>

    </Post>
)