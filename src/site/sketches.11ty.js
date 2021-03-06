const { html } = require('./_includes/html.js')
const gallery = require('./_includes/components/gallery.js')

module.exports.data = {
    title: 'Sketches',
    menuIndex: 1,
    tags: 'page',
    layout: 'layouts/index.11ty.js'
}

module.exports.render = function render({ collections }) {
    return html`<div>
            ${gallery(collections.sketch)}
        </div>`.toString()
}