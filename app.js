import chalk from 'chalk'
import {add_note,remove_note,listNotes,readNote} from './notes.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


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
    command: 'list',
    describe: 'List your notes',
    handler() {
        listNotes()
    }
})

yarg.command({  
    command:'read',
    describe:'reads a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        readNote(argv.title)
    }

})
yarg.parse();