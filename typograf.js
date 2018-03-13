#!/usr/bin/env node

const path = require('path'), fs = require('fs');
// Typograf = require('typograf')
// const tp = new Typograf({ locale: ['ru', 'en-US'] })

const npm = require('npm');
npm.load(function(err) {
    // handle errors

    // install module ffi
    npm.commands.install(['typograf-cli'], function(er, data) {
        // log errors or data
    });

    npm.on('log', function(message) {
        // log installation progress
        console.log(message);
    });
});



function fromDir(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log('no dir ', startPath)
        return
    }

    let files = fs.readdirSync(startPath)
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i])
        let stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            fromDir(filename, filter) //recurse
        }
        else if (filename.indexOf(filter) >= 0) {
            console.log('-- found: ', filename)
            const text = fs.readFileSync(filename, 'utf8')
            const typografedText = tp.execute(text)
            fs.writeFileSync(filename, typografedText, 'utf8');
        }

    }

}

fromDir('./out/', '.html')