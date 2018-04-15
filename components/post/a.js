import Link from 'next/link'

export default ({ href, external, children, ...rest }) => (
    external
        ? <a href={href} rel='noopener noreferrer' target='_blank'>{children}</a>
        : <Link prefetch href={href} {...rest}><a>{children}</a></Link>
)