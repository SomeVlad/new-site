// TODO: include into templates

import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description"
                  content="undefined.today – blog about frontend development and everything else by Vlad Samoylov." />
            <meta name="robots" content="all" />
            <meta name="author" content="Vlad Samoylov" />
            <meta name="google-site-verification" content="NaLgqEs3mDLe56mD3CU2ytHQH--SZZmp6pvoqEPnxOc" />
            <link rel="manifest" href="/manifest.json" />
            {/* favicons */}
            {/*<link rel="apple-touch-icon-precomposed" sizes="57x57"
                  href="/static/favicon/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114"
                  href="/static/favicon/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72"
                  href="/static/favicon/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144"
                  href="/static/favicon/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60"
                  href="/static/favicon/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120"
                  href="/static/favicon/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76"
                  href="/static/favicon/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152"
                  href="/static/favicon/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="/static/favicon/favicon-196x196.png"
                  sizes="196x196" />
            <link rel="icon" type="image/png" href="/static/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/static/favicon/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/static/favicon/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/static/favicon/favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="Vlad Samoylov's blog" />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/static/favicon/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/static/favicon/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/static/favicon/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/static/favicon/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/static/favicon/mstile-310x310.png" />
            <meta name="msapplication-notification"
                  content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=/static/favicon/feed.xml&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=/static/favicon/feed.xml&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=/static/favicon/feed.xml&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=/static/favicon/feed.xml&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=/static/favicon/feed.xml&amp;id=5;cycle=1" />*/}
        </Head>
    </div>
)