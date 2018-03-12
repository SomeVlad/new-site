const { entries } = require('./posts.json')

/*{ '2016':
    [ { id: 'swiss-knife-bot',
        date: '12 Sep',
        title: 'Telegram bot to make you happier',
        description: 'It is meant to do a lot of useful stuff. And it does.' },
        { id: 'answer-more-questions',
            date: 'January 6, 2017',
            title: 'IV questions 2' } ],
        '2017':
    [ { id: 'swiss-knife-bot',
        date: '12 Sep',
        title: 'Telegram bot to make you happier',
        description: 'It is meant to do a lot of useful stuff. And it does.',
        picture: '/static/images/bender-preview.jpg',
        styles: [Object] },
        { id: 'more-answers',
            date: '3 Sep',
            title: 'Several typical js tasks – pt. II',
            description: 'Maybe one day this post will save me even more time on an interview.' },
        { id: 'answers',
            date: '31 Jul',
            title: 'Several typical js tasks – pt. I',
            description: 'Maybe one day this post will save me some time on an interview.' } ] }*/


module.exports = {
    exportPathMap: function() {
        const years = Object.keys(entries);
        const ids = [''];
        years.map(year => {
            entries[year].map(entry => ids.push(entry.id))
        })
        const result = {};
        ids.map(id => {
            result[`/${id}`] = {}
            result[`/${id}`].page = `/${id}`
        })
        return result
    }
}