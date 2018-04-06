import { docco } from 'react-syntax-highlighter/styles/hljs'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/light'
import js from 'react-syntax-highlighter/languages/hljs/javascript'

registerLanguage('javascript', js)

export default ({ children }) => (
    <code>
        {children}
        {/*language=CSS*/}
        <style jsx>{`
            code {
                color: #666;
                font-family: monospace;
            }
        `}</style>
    </code>
)

export const Codeblock = ({children, language = 'javascript', customStyle = {
    fontSize: '24px',
    backgroundColor: '#fafafa',
    boxShadow: 'inset 3px 0px 34px rgba(0, 0, 0, 0.05)',
    borderRadius: '16px'
}, ...rest}) => (
    <SyntaxHighlighter language={language} style={docco} customStyle={customStyle} {...rest}>
        {children}
    </SyntaxHighlighter>
)