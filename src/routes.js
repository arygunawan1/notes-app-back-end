/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const {
  addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdhandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [{
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
},
{
  method: 'GET',
  path: '/notes',
  handler: getAllNotesHandler,
},
{
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
},
{
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdhandler,
},
{
  method: 'DELETE',
  path: '/notes/{id}',
  handler: deleteNoteByIdHandler,
}];

module.exports = routes;
