import Head from 'next/head'
import Link from 'next/link'
import Post from '../layouts/post'
import { H1, H2, H3 } from '../components/post/heading'
import P from '../components/post/paragraph'
import A from '../components/post/a'
import Youtube from '../components/post/youtube'
import { Image } from '../components/post/figure'
import { UL, OL, ULI, OLI } from '../components/post/list'
import Code, { Codeblock } from '../components/post/code'
import HR from '../components/post/hr'

class Facebook_Link_Fixer_Legacy extends React.Component {
    render() {
        return (
            <div className="facebook_link_fixer">
                {/*language=CSS*/}
                <style>{`
                    .facebook_link_fixer {
                        margin-bottom: 1.5em;
                    }

                    .facebook_link_fixer input {
                        box-sizing: border-box;
                        height: 2.25rem;
                        padding: .5rem .5rem;
                        vertical-align: middle;
                        -webkit-appearance: none;
                        width: 100%;
                        display: block;
                        border: solid 1px #ccc;
                        border-radius: 3px;
                        font-size: 1rem;
                        margin-top: 0;
                        margin-bottom: .5rem;
                    }

                    .facebook_link_fixer .unshit {
                        display: block;
                        margin-top: 0.5em;
                        margin-bottom: 1em;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-weight: 100;
                        font-size: 2em;
                        position: relative;
                        text-align: center;
                        color: #0076df;
                        border: 1px solid #0076df;
                        border-radius: 5px;
                        line-height: 3em;
                        box-shadow: 0 0 0 0 transparent;
                        transition: all 0.2s ease-in;
                        outline: none;
                        width: 60%;
                        cursor: pointer;
                    }

                    .facebook_link_fixer .unshit:hover {
                        color: white;
                        box-shadow: 0 0 30px 0 rgba(0, 118, 223, 0.5);
                        background-color: #0076df;
                        -webkit-transition: all 0.2s ease-out;
                        -moz-transition: all 0.2s ease-out;
                        transition: all 0.2s ease-out;
                    }

                    .facebook_link_fixer .unshit:hover:before {
                        -webkit-animation: shine 0.5s 0s linear;
                        -moz-animation: shine 0.5s 0s linear;
                        animation: shine 0.5s 0s linear;
                    }

                    .facebook_link_fixer .unshit:active {
                        box-shadow: 0 0 0 0 transparent;
                        -webkit-transition: box-shadow 0.2s ease-in;
                        -moz-transition: box-shadow 0.2s ease-in;
                        transition: box-shadow 0.2s ease-in;
                    }

                    .facebook_link_fixer .unshit:before {
                        content: '';
                        display: block;
                        width: 0;
                        height: 86%;
                        position: absolute;
                        top: 7%;
                        left: 0%;
                        opacity: 0;
                        background: white;
                        box-shadow: 0 0 15px 3px white;
                        -webkit-transform: skewX(-20deg);
                        -moz-transform: skewX(-20deg);
                        -ms-transform: skewX(-20deg);
                        -o-transform: skewX(-20deg);
                        transform: skewX(-20deg);
                    }

                    @-webkit-keyframes shine {
                        from {
                            opacity: 0;
                            left: 0%;
                        }
                        50% {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                            left: 100%;
                        }
                    }

                    @-moz-keyframes shine {
                        from {
                            opacity: 0;
                            left: 0%;
                        }
                        50% {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                            left: 100%;
                        }
                    }

                    @keyframes shine {
                        from {
                            opacity: 0;
                            left: 0%;
                        }
                        50% {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                            left: 100%;
                        }
                    }

                    .facebook_link_fixer .go {
                        color: white;
                        background-color: #0076df;
                        border-radius: 3px;
                    }

                    .facebook_link_fixer .copy_result_to_clipboard {
                        background-color: #eee;
                        padding: 5px 0;
                    }

                    #good_link {
                        margin-bottom: 0;
                    }

                    .facebook_link_fixer .copy_result_to_clipboard,
                    .facebook_link_fixer .go {
                        border: none;
                        text-align: center;
                        width: 50%;
                        display: inline-block;
                        font-size: var(--base-font-size);
                        font-weight: 300;
                        cursor: pointer;
                    }

                    .facebook_link_fixer .copy_result_to_clipboard:hover,
                    .facebook_link_fixer .copy_result_to_clipboard:active {
                        color: inherit;
                    }

                    .facebook_link_fixer .err {
                        display: none;
                        margin-top: -0.4rem;
                        margin-bottom: 10px;
                        font-size: 0.8em;
                        font-style: italic;
                        color: #f95020;
                    }

                    .facebook_link_fixer .is-error ~ .err {
                        display: block;
                    }

                    .facebook_link_fixer .insert_sample {
                        cursor: pointer;
                    }

                    .facebook_link_fixer .hide {
                        display: none;
                    }
                `}</style>

                <p>
                    First paste your shitty mobile link here:
                    <input id="shitty_link" type="text" className="block field col-12" value=""
                           placeholder="https://m.faceb💩k.com/weneedwebdev" />
                    <span className="err col-12 hide">Your link is not shitty enough!
    Try <a className="insert_sample">sample shit</a>.</span>
                </p>

                <p>Then click this button:
                    <button className="unshit button bg-white col-6 sm-col-12">Unshit!</button>
                </p>
                <p className="hide">And here you go!
                    <input id="good_link" type="text" className="block field col-12 mb0 hide" value=""
                           placeholder="tadaa" />
                    <a className="go button button-blue col-6 hide" href="" target="_blank" rel="noopener noreferrer">
                        Navigate me there!</a>
                    <button className="copy_result_to_clipboard button bg-lighter-gray col-6 right hide">Copy!</button>
                </p>
            </div>
        )
    }

    componentDidMount() {
        console.log('%cStahp!', 'font-family: sans-serif; line-height: 1.5;font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black; ')

        const button = document.querySelector('button.unshit')
        const badInput = document.querySelector('#shitty_link')
        const goodInput = document.querySelector('#good_link')
        const copyToClipboardButton = document.querySelector('.copy_result_to_clipboard')
        const goToGoodLink = document.querySelector('a.go')
        const insertSample = document.querySelector('.insert_sample')

        insertSample.addEventListener('click', function(e) {
            badInput.value = 'https://m.facebook.com/story.php?story_fbid=10154622836903553&id=19292868552'
        })
        button.addEventListener('click', generateLink)
        copyToClipboardButton.addEventListener('click', function() {
            copyToClipboard(copyToClipboardButton, goodInput)
        })

        function generateLink() {
            let goodLink = ''
            debugger
            badInput.classList.remove('is-error')
            try {
                const badLink = new URL(badInput.value)

                if (badLink.pathname.indexOf('/posts/') !== -1) {
                    goodLink = badLink.href.replace('m.', 'www.').replace('touch.', 'www.')
                }

                else {
                    const postId = badLink.searchParams.get('story_fbid')
                    const userId = badLink.searchParams.get('id')

                    if (!postId || !userId || (badInput.value.indexOf('m.') < 0 && badInput.value.indexOf('touch.') < 0)) {
                        throw new Error('Your link is not shitty enough!')
                    }

                    goodLink = `https://www.facebook.com/${userId}/posts/${postId}`
                }

                goodInput.value = goodLink
                goToGoodLink.href = goodLink
                document.querySelectorAll('.hide').forEach((hidden) => hidden.classList.remove('hide'))
            }

            catch (err) {
                badInput.classList.add('is-error')
            }
        }

        function copyToClipboard(buttonElem, targetElem) {
            if (document.queryCommandSupported('copy')) {
                clearSelection()

                if (targetElem.nodeName === 'INPUT') {
                    targetElem.select()
                }

                else {
                    const range = document.createRange()
                    range.selectNode(targetElem)
                    window.getSelection().addRange(range)
                }

                try {
                    const successful = document.execCommand('copy')
                    buttonElem.innerHTML = successful ? 'Copied' : 'Oops, error!'
                } catch (err) {
                }
                clearSelection()
            }
            else {
                buttonElem.classList.add('hide')
            }

            function clearSelection() {
                if (document.selection) {
                    document.selection.empty()
                } else if (window.getSelection) {
                    window.getSelection().removeAllRanges()
                }
            }
        }
    }
}

export default () => (
    <Post>
        <Head>
            <title>Facebook link fixer</title>
        </Head>

        <H1>Facebook link fixer</H1>

        <H2>Preamble</H2>

        <P>As we all know, Facebook cannot afford a couple of developers. Sometimes it is funny.
            But sometimes it is getting really ridiculous, so someone's gotta do the work.</P>

        <H2>Problem</H2>

        <P>When you copy a link to post from your mobile browser, you get something like this:</P>
        <Codeblock>https://m.facebook.com/story.php?story_fbid=post_id&id=user_id</Codeblock>

        <P>When you send someone this link and an addressee clicks it, he sees this&nbsp;💩:</P>
        <Image src='/static/images/facebook.png' alt='Faceb💩k' title='Faceb💩k' />

        <Facebook_Link_Fixer_Legacy />
    </Post>
)