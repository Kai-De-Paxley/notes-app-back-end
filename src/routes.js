const { addNoteHandler, getNoteHandler, getClickHandler, editNotePut, deleteNote } = require("./handler")

const routes = [{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
},{
    method: 'GET',
    path: '/notes',
    handler: getNoteHandler,
},{
    method: 'GET',
    path: '/notes/{id}',
    handler: getClickHandler,
},{
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotePut,
},{
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNote
}]

module.exports = routes