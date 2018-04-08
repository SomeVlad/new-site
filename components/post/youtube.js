import React from 'react'
import Youtube from 'react-youtube'

class YouTube extends React.Component {
    static defaultProps = {
        opts: {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                origin: 'https://vladsamoylov.com/'
            }
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='youtube-wrapper'>
                    <Youtube {...this.props} />
                    {/*language=CSS*/}
                    <style jsx global>{`
                        .youtube-wrapper {
                            position: relative;
                            padding-bottom: 56.25%; /* 16:9 */
                            padding-top: 25px;
                            height: 0;
                            border: 1px solid var(--color-black);
                            background-color: #eeeeee;
                        }

                        .youtube-wrapper iframe {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        }

                        .youtube-wrapper::before {
                            content: 'Video!';
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 100%;
                            text-align: center;
                            font-family: var(--xprmntl-font);
                            color: #888;
                            transform: translateY(-50%);
                        }
                    `}</style>
                </div>
            </div>)
    }
}

export default YouTube