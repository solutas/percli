const maven = require('maven')
const fs    = require('fs-extra')
const path  = require('path')
const html = require('html')
const cheerio = require('cheerio')

const templates = require('../templates/index.js')
const generator = require('../lib/generator.js')
const functions = require('../lib/functions.js')

console.log("hatch.js")

//fs.readFileSync('file.txt', 'utf8');