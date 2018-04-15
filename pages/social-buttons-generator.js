import Post from '../layouts/post'
import { H2 } from '../components/post/heading'
import { UL, ULI } from '../components/post/list'
import A from '../components/post/a'

class Social_Buttons_Generator_Legacy extends React.Component {
    clickHandler = e => {
        const target = e.target
        if (target.nodeName === 'INPUT') {
            this.selectBoxState[target.name].checked = target.checked
            this.renderResult()
        }
    }
    copyToClipboard = (buttonElem, targetElem) => {
        if (document.queryCommandSupported('copy')) {
            this.clearSelection()
            const range = document.createRange()
            range.selectNode(targetElem)
            window.getSelection().addRange(range)

            try {
                const successful = document.execCommand('copy')
                buttonElem.innerHTML = successful ? 'Copied' : 'Oops, error!'
            } catch (err) {
            }
            this.clearSelection()
        }
        else {
            buttonElem.classList.add('hide')
        }
    }
    clearSelection = () => {
        if (document.selection) {
            document.selection.empty()
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges()
        }
    }
    resetCopyButton = () => {
        this.copyToClipboardButton.innerHTML = 'Copy to clipboard'
    }
    getLink = (name, text, url, summary) => {
        switch (name) {
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${url}`
            case 'linkedin':
                return `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}&summary=${summary}`
            case 'twitter':
                return `https://twitter.com/intent/tweet?text=${text}&url=${url}`
            case 'vk':
                return `https://vk.com/share.php?url=${url}`
            case 'telegram':
                return `https://telegram.me/share/url?text=${text}&url=${url}`
            case 'pinterest':
                return `https://pinterest.com/pin/create/button/?description=${text}&url=${url}`
            case 'skype':
                return `https://web.skype.com/share?url=${url}`
            case 'google+':
                return `https://plus.google.com/share?url=${url}`
            case 'tumblr':
                return `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${text}&caption=${summary}`
        }
    }
    renderResult = () => {
        this.text = encodeURIComponent(this.textShareInput.value.trim())
        this.url = encodeURIComponent(this.urlShareInput.value.trim())
        this.summary = encodeURIComponent(this.summaryShareInput.value.trim())
        this.previewBox.innerHTML = ''
        Object.keys(this.selectBoxState)
              .filter(item => this.selectBoxState[item].checked)
              .map(item => {
                  const link = document.createElement('A')
                  const linkText = document.createTextNode(item)
                  const customClass = this.classShareInput.value.trim()
                  link.href = this.getLink(item, this.text, this.url, this.summary)
                  link.target = '_blank'
                  link.rel = 'noopener noreferrer'
                  link.appendChild(linkText)
                  customClass && customClass.split(' ').map(className => link.classList.add(className))
                  this.previewBox.appendChild(link)
              })
        this.resultCode.value = this.previewBox.innerHTML
    }

    render() {
        return (
            <div className="static_share_buttons_generator">
                <div className="top clearfix">
                    <div className="form lg-col-10 md-col-9 sm-col-12 left">
                        <label htmlFor="share_text">Text to share:</label>
                        <input id="share_text" type="text" className="block field col-11"
                               placeholder="so link much wow" />

                        <label htmlFor="share_url">URL:</label>
                        <input id="share_url" type="text" className="block field col-11"
                               placeholder="{{ site.url }}{{ page.url }}" />

                        <label htmlFor="share_summary">Summary (for linkedin):</label>
                        <input id="share_summary" type="text" className="block field col-11"
                               placeholder="Some words everyone cares about" />

                        <label htmlFor="share_class">Custom class for &lt;a&gt;:</label>
                        <input id="share_class" type="text" className="block field col-11"
                               placeholder="superclass1 superclass2" />
                    </div>
                    <div className="select lg-col-2 md-col-3 sm-col-12 right">
                        <input type="checkbox" name="facebook" id="facebook" /><label
                        htmlFor="facebook">facebook</label>
                        <input type="checkbox" name="linkedin" id="linkedin" /><label
                        htmlFor="linkedin">linkedin</label>
                        <input type="checkbox" name="twitter" id="twitter" /><label htmlFor="twitter">twitter</label>
                        <input type="checkbox" name="vk" id="vk" /><label htmlFor="vk">vk</label>
                        <input type="checkbox" name="telegram" id="telegram" /><label
                        htmlFor="telegram">telegram</label>
                        <input type="checkbox" name="pinterest" id="pinterest" /><label
                        htmlFor="pinterest">pinterest</label>
                        <input type="checkbox" name="skype" id="skype" /><label htmlFor="skype">skype</label>
                        <input type="checkbox" name="google+" id="google+" /><label
                        htmlFor="google+">google+</label>
                        <input type="checkbox" name="tumblr" id="tumblr" /><label
                        htmlFor="tumblr">tumblr</label>
                    </div>
                </div>

                <H2>Preview</H2>
                <div className="preview" />
                <H2><label htmlFor="result">Code</label></H2>
                <div className="result">
                    <textarea id="result" className="col-12 block field" rows="8" />
                    <button className="copy_result_to_clipboard button bg-lighter-gray right">Copy to clipboard</button>
                </div>

                {/*language=CSS*/}
                <style jsx>{`
                    .static_share_buttons_generator {
                        margin-bottom: 100px;
                    }

                    .static_share_buttons_generator .preview {
                        display: flex;
                        flex-direction: column;
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                        align-content: stretch;
                        align-items: flex-start;
                    }

                    .static_share_buttons_generator .select label {
                        display: inline-block;
                        min-width: 8em;
                        position: relative;
                        cursor: pointer;
                        padding-left: 1.8em;
                        margin-top: 0.8em;
                    }

                    .static_share_buttons_generator .select label:first-of-type {
                        margin-top: 1.2em;
                    }

                    .static_share_buttons_generator .result textarea {
                        font-size: 0.5em;
                        resize: vertical;
                    }

                    .static_share_buttons_generator .select input {
                        display: none;
                    }

                    .static_share_buttons_generator .select label:before {
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

                    .static_share_buttons_generator .select input:checked + label:before {
                        border-color: #fafafa;
                        border-width: 3px;
                    }

                    .static_share_buttons_generator .select input + label {
                        transition: color .7s ease;
                    }

                    .static_share_buttons_generator .select input:checked + label {
                        /*color: #5D5D5D;*/
                    }

                    .static_share_buttons_generator .copy_result_to_clipboard {
                        width: 10em;
                    }

                    .static_share_buttons_generator .copy_result_to_clipboard:hover,
                    .static_share_buttons_generator .copy_result_to_clipboard:focus,
                    .static_share_buttons_generator .copy_result_to_clipboard:active {
                        color: inherit;
                    }

                    .static_share_buttons_generator .block {
                        display: block;
                    }

                    .static_share_buttons_generator .left {
                        float: left;
                    }

                    .static_share_buttons_generator .right {
                        float: right;
                    }

                    .static_share_buttons_generator .clearfix:after {
                        clear: both;
                    }

                    .static_share_buttons_generator .clearfix:before, .static_share_buttons_generator .clearfix:after {
                        content: ' ';
                        display: table;
                    }

                    .col-11 {
                        width: calc(11 / 12 * 100%);
                    }

                    input, textarea {
                        box-sizing: border-box;
                        padding: .5rem .5rem;
                        vertical-align: middle;
                        -webkit-appearance: none;
                        font-size: 100%;
                    }

                    textarea {
                        font-size: 50%;
                    }

                    .field {
                        border-style: solid;
                        border-width: 1px;
                        border-color: #ccc;
                        border-radius: 3px;
                    }

                    .col-12 {
                        width: 100%;
                    }

                    @media (min-width: 52em) {
                        .md-col-9 {
                            width: calc(9 / 12 * 100%);
                        }

                        .md-col-3 {
                            width: calc(3 / 12 * 100%);
                        }
                    }

                    .bg-lighter-gray {
                        font-size: inherit;
                        font-weight: 300;
                        text-decoration: none;
                        cursor: pointer;
                        display: inline-block;
                        box-sizing: border-box;
                        line-height: 1.125rem;
                        padding: .5rem 1rem;
                        margin: 0;
                        height: auto;
                        border: 1px solid transparent;
                        vertical-align: middle;
                        -webkit-appearance: none;
                        background-color: #eee;
                    }
                `}</style>
            </div>
        )
    }

    componentDidMount() {

        this.selectBox = document.querySelector('.static_share_buttons_generator .select')
        this.resultBox = document.querySelector('.static_share_buttons_generator .result')
        this.previewBox = document.querySelector('.static_share_buttons_generator .preview')

        this.copyToClipboardButton = document.querySelector('.copy_result_to_clipboard')
        this.resultCode = this.resultBox.querySelector('textarea')

        this.textShareInput = document.querySelector('#share_text')
        this.urlShareInput = document.querySelector('#share_url')
        this.summaryShareInput = document.querySelector('#share_summary')
        this.classShareInput = document.querySelector('#share_class')

        this.selectBoxState = {}

        Array.from(this.selectBox.querySelectorAll('input')).map((input, idx) => {
            this.selectBoxState[input.name] = { checked: input.checked, order: idx }
        })

        this.selectBox.addEventListener('click', this.clickHandler)
        this.textShareInput.addEventListener('keyup', this.renderResult, false)
        this.urlShareInput.addEventListener('keyup', this.renderResult, false)
        this.summaryShareInput.addEventListener('keyup', this.renderResult, false)
        this.classShareInput.addEventListener('keyup', this.renderResult, false)
        this.resultCode.addEventListener('change', this.resetCopyButton, false)
        this.resultCode.addEventListener('keyup', this.resetCopyButton, false)
        this.copyToClipboardButton.addEventListener('click',
            () => this.copyToClipboard(this.copyToClipboardButton, this.resultCode), false)
    }

    shouldComponentUpdate() {
        return false
    }
}

export default () => (
    <Post title='Static social buttons generator'>

        <H2>Why should I use it?</H2>

        Explained <A href='/static-social-buttons/'>here</A>.

        <H2>Generator</H2>

        <Social_Buttons_Generator_Legacy />

        <H2>To do</H2>

        <UL>
            <ULI>icons (probably, svg-sprite)</ULI>
            <ULI>better UI</ULI>
        </UL>
    </Post>
)