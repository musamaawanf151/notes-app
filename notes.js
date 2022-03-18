import fs from "fs";
import chalk from "chalk";

export const notes = function () {
  return "your notes .. ";
};

export const add_note = function (title, body) {
  const notes = load_Notes();
  debugger

  const duplicate_notes = notes.filter(function (note)
   {
    return note.title === title;
    });


  if (duplicate_notes.length == 0) {

    notes.push({
      title: title,
      body: body,
    });

    save_notes(notes);
    console.log("Note added")
  }
  else{
      console.log('Note title already exist')
  }
};

export const remove_note = function(title){
    const notes = load_Notes()
    const new_notes = notes.filter(function(note){
        return note.title != title
    })
    if (notes.length == new_notes.length){
        console.log(chalk.red.inverse('No note found'))
    }
    else{
        console.log(chalk.green.inverse('note removed'))
        save_notes(new_notes)
        
        }
    
}

export const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
      console.log(chalk.inverse(note.title))
      console.log(note.body)
  } else {
      console.log(chalk.red.inverse('Note not found!'))
  }
}


export const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes'))

  notes.forEach((note) => {
      console.log(note.title)
  })
}

const loadNotes = () => {
  try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
      return []
  }
}

const save_notes = function (data) {
  const data_json = JSON.stringify(data);
  fs.writeFileSync("notes.json", data_json);
};

const load_Notes = function () {
  try {
    const notes_buffer = fs.readFileSync("notes.json");
    const notes_string = notes_buffer.toString();
    return JSON.parse(notes_string);
  } catch (e) {
    return [];
  }
};

