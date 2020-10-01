const path  = require('path')
const fs    = require('fs-extra')
const fm = require('front-matter');


const pathname = path.join(__filename, '..','./files');

function readTemplates() {
    const d = fs.readdirSync(pathname);
    d.forEach(item=> {
        const f = fs.readFileSync(path.join(pathname, item), "utf-8");
        const bo = fm(f);
        console.log(bo.attributes.name)
    })
}




console.log("template")
console.log("pathname")
console.log(pathname)
readTemplates()
module.export = {}