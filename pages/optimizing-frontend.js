import Post from '../layouts/post'
import { H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import A from '../components/post/a'
import Youtube from '../components/post/youtube'
import { Image } from '../components/post/figure'
import { OL, OLI } from '../components/post/list'
import HR from '../components/post/hr'

const Optimization_Checklist_Legacy = () => (
    <div className="optimization_checklist">
        <div className="select">
            <input type="checkbox" id="1" />
            <label htmlFor="1">Tree-shake</label>
            <P>Your users don't have to load all the stuff even you don't use.</P>

            <input type="checkbox" id="2" />
            <label htmlFor="2">Minify your assets</label>
            <P>Sometimes it changes bundle size drastically.</P>

            <input type="checkbox" id="3" />
            <label htmlFor="3"><code>defer</code></label>
            <P>And <code>async</code>.</P>

            <input type="checkbox" id="4" />
            <label htmlFor="4">Stop using SDK's for social buttons</label>
            <P><A href='/social-buttons-generator'>Use static ones instead.</A></P>

            <input type="checkbox" id="5" />
            <label htmlFor="5">Use <code>&lt;picture&gt;</code> and <code>&lt;img srcset&gt;</code></label>
            <P>It's quite <A external href="http://www.responsivebreakpoints.com/">simple</A>.</P>

            <input type="checkbox" id="6" />
            <label htmlFor="6">Use progressive jpeg, optimize png and svg</label>
            <P>
                <A external href="https://github.com/mozilla/mozjpeg">Mozilla JPEG Encoder</A>,
                {' '}<A external href="https://tinypng.com/">TinyPNG</A> for png and jpeg compression,
                {' '}<A external href="https://kornel.ski/lossygif">LossyGIF</A>,
                {' '}<A external href="https://jakearchibald.github.io/svgomg/">SVGOMG</A> powered by
                {' '}<A external href="https://github.com/svg/svgo">SVGO</A>.
            </P>

            <input type="checkbox" id="7" />
            <label htmlFor="7">Optimize webfonts</label>
            <P>
                <A external href="https://pixelambacht.nl/2016/font-awesome-fixed/">Like this</A>,
                for example. Or just use system ones, that's actually an option.
            </P>


            <input type="checkbox" id="8" />
            <label htmlFor="8">Inline critical CSS</label>
            <P>E.g. with this <a target="_blank" rel="noopener noreferrer"
                                 href="https://github.com/filamentgroup/criticalCSS">tool</a>.
            </P>

            <input type="checkbox" id="9" />
            <label htmlFor="9">Tell a browser what he will do next most likely</label>
            <P>
                Use{' '}
                <A external href="https://w3c.github.io/resource-hints/#dfn-prefetch"><code>prefetch</code></A>,{' '}
                <A external
                   href="https://w3c.github.io/resource-hints/#dfn-dns-prefetch"><code>dns-prefetch</code></A>,{' '}
                <A external href="https://w3c.github.io/resource-hints/#dfn-prerender"><code>prerender</code></A>,{' '}
                <A external href="https://w3c.github.io/preload/"><code>preload</code></A> and{' '}
                <A external href="https://w3c.github.io/resource-hints/#dfn-preconnext"><code>preconnect</code></A>.
            </P>

            <input type="checkbox" id="10" />
            <label htmlFor="10">Check if you are using compression</label>
            <P>
                <A external
                   href="https://blog.cloudflare.com/hpack-the-silent-killer-feature-of-http-2/">HPACK</A> and{' '}
                <A external href="https://en.wikipedia.org/wiki/Gzip">Gzip</A>.
            </P>

            <input type="checkbox" id="11" />
            <label htmlFor="11">Implement service workers</label>
            <P>So your site is at least half as fast as mine.</P>

            <input type="checkbox" id="12" />
            <label htmlFor="12">Take advice from Google</label>
            <P>Use <A external href="https://github.com/GoogleChrome/lighthouse">this
                tool</A> and follow its recommendations.</P>
        </div>

        {/*language=CSS*/}
        <style jsx>{`
            .optimization_checklist .select label {
                display: inline-block;
                min-width: 8em;
                position: relative;
                cursor: pointer;
                padding-left: 1.8em;
                margin-top: 0.8em;
            }

            /*.optimization_checklist .select label:first-of-type {
                margin-top: 1.2em;
            }*/

            .optimization_checklist .result textarea {
                font-size: 0.5em;
                resize: vertical;
            }

            .optimization_checklist .select input {
                display: none;
            }

            .optimization_checklist .select label:before {
                content: '';
                display: inline-block;
                background: #0076df;
                position: absolute;
                left: 0;
                top: 0.2em;
                height: 1em;
                width: 1em;
                border-radius: 80%;
                box-shadow: 0 1px 0 0 rgba(0, 0, 0, .2);
                box-sizing: border-box;
                border: 0.5em solid #f6f6f6;
                transition: border .3s ease;
            }

            .optimization_checklist .select input:checked + label:before {
                border-color: #fafafa;
                border-width: 3px;
            }

            .optimization_checklist .select input + label {
                transition: color .3s ease;
            }

            .optimization_checklist .select input:checked + label {
                color: #8f8f8f;
                text-decoration: line-through;
            }

            .optimization_checklist .select p {
                font-size: 0.8em;
            }
        `}</style>
    </div>
)

export default () => (
    <Post title='A few thoughts on frontend optimization'>

        <P>Several days ago I've stumbled upon{' '}
            <A external href="http://www.mattzeunert.com/2017/01/30/lazy-javascript-parsing-in-v8.html">a topic</A>
            (<A external href="https://medium.com/devschacht/lazy-javascript-parsing-in-v8-99b5c3a6cbba">🇷🇺</A>) in
            the internet where yet another frontend developer
            tries to &laquo;cheat the system&raquo; by outsmarting engines and compilers.</P>
        <P>The ending was a bit predictable: over 1,000 words, questionable libraries, and a bunch of hacks resulted in
            decreasing the load time</P>

        <br /><br /><br />

        <P>by 6ms</P>

        <br /><br /><br />

        <P>in Chrome.</P>

        <H2>So what?</H2>

        <P>So when you come up with yet another brilliant idea on how to cheat the compiler, first</P>

        <OL>
            <OLI>
                make sure you are smarter than this guy
                <Youtube videoId={`65-RbBwZQdU`} />
                If you think you are, proceed to the next step:
            </OLI>
            <OLI>
                watch this video
                <Youtube videoId={`PhUb7y9WZGs`} />
                If your strategy remains unrethought
            </OLI>
            <OLI>
                ensure you've done all the more obvious optimization stuff<br />
                <Optimization_Checklist_Legacy />
            </OLI>
            <OLI>You checked the hell out of this list but still haven't changed your mind?<br />
                Well...
                <Image src='/static/images/well.gif' alt='I give up.' title='I give up.' />
            </OLI>
        </OL>

        <P>I have to end this topic somewhat arrogantly.</P>

        <HR />

        Dixi.
    </Post>
)