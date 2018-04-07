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
            <div className='youtube-wrapper'>
                <Youtube {...this.props} />
                {/*language=CSS*/}
                <style jsx global>{`
                    .youtube-wrapper {
                        position: relative;
                        padding-bottom: 56.25%; /* 16:9 */
                        padding-top: 25px;
                        height: 0;
                    }

                    .youtube-wrapper iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                `}</style>
            </div>)
    }
}

export default YouTube