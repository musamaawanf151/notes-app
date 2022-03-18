// const notes = require('./notes')
// const chalk = require('chalk')
// const yargs = require('yargs')
import chalk from 'chalk'
import {add_note,remove_note} from './notes.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// console.log("jdhkdjhk")
// console.log(notes());

const yarg = yargs(hideBin(process.argv))
yarg.version = '1.1.0'

yarg.command({
    command:'add',
    describe:'add a note',
    builder:  {
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }

    },
    handler: function(argv){
        add_note(argv.title,argv.body)
        // console.log(' title : '+ argv.title +'\n' , 'body : '+ argv.body)
    }

})

yarg.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
            }
        },
    handler: function(argv){
        // console.log('removing a note')
        remove_note(argv.title)
    }

})

yarg.command({  
    command:'list',
    describe:'list a note',
    handler: function(){
        console.log('listing a note')
    }

})

yarg.command({  
    command:'read',
    describe:'reads a note',
    handler: function(){
        console.log('reading a note')
    }

})
yarg.parse();
// console.log(yarg.argv)