const { entries } = require('./posts.json')

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