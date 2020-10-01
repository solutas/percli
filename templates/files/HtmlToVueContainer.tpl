---
target: any
extension: js
name: HtmlToVueContainer
---
module.exports = {
    convert: function($, f) {
        f.bindPath($)
        f.addChildren($)
        f.addPlaceholders($)
    }
}