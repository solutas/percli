---
target: any
extension: js
name: HtmlToVueComponent
---
module.exports = {
    convert: function($, f) {
        f.bindPath($)
    }
}