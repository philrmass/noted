import { v4 as uuidv4 } from 'uuid';
import { getColors } from './colors';

export function getEmptyNote(id = uuidv4()) {
  return {
    at: Date.now(),
    children: [],
    id,
    text: '',
  };
}

export function getNotesDefault() {
  const uuids = [
    'f869dfeb-d19e-4939-b6ab-3c5510dd09e0',
    'f574a4e0-edf8-4561-83f5-4d9d6516f395',
    '56908aab-8473-4449-b1f1-9eaac1f29bdb',
    '6621aa23-4ef1-4c4e-94ac-f604787d45b5',
    '67997824-f829-4fec-acb8-b1188c652697',
    'd9e75f3f-7f73-4c84-8021-0b1595325d0c',
    '2c1fd2d2-a2d2-4c9f-8c4f-f08f2fd54f63',
    '7106f600-66fd-4b74-819b-69bc50c3aa85',
  ];
  const colors = getColors();
  const at = Date.now();

  return {
    root: {
      at,
      children: [...uuids.slice(0, 6)],
      id: 'root',
    },
    [uuids[0]]: {
      at,
      children: [],
      color: colors[12],
      text: 'This is a note',
      id: uuids[0],
    },
    [uuids[1]]: {
      at,
      children: [],
      color: colors[7],
      text: 'Add a new note using the plus button in the bottom right',
      id: uuids[1],
    },
    [uuids[2]]: {
      at,
      children: [],
      color: colors[8],
      text: 'Long press on a note to edit it, or change its color',
      id: uuids[2],
    },
    [uuids[3]]: {
      at,
      children: [],
      color: colors[11],
      text: 'Delete the note with the button on the top left of the note',
      id: uuids[3],
    },
    [uuids[4]]: {
      at,
      children: [],
      color: colors[0],
      text: 'The menu in the top right lets you save and load note backup data',
      id: uuids[4],
    },
    [uuids[5]]: {
      at,
      children: [...uuids.slice(6)],
      color: colors[15],
      text: 'The number on the left is the number of child notes. Click the note to see them',
      id: uuids[5],
    },
    [uuids[6]]: {
      at,
      children: [],
      color: colors[3],
      text: 'This is a child note of the note shown above',
      id: uuids[6],
    },
    [uuids[7]]: {
      at,
      children: [],
      color: colors[4],
      text: 'Press the back button in the bottom left to go back to the parent note',
      id: uuids[7],
    },
  };
}

export function importNotes(data) {
  const isObject = data && typeof data === 'object';
  const hasRoot = Boolean(data?.root);

  if (!isObject) {
    return { notes: null, message: 'Data is not an object' };
  }

  if (!hasRoot) {
    return { notes: null, message: 'No root node found' };
  }

  const notes = importNoteTree(data, 'root');
  const count = Object.keys(notes).length;
  const message = `Imported ${count} notes. `;

  return { notes, message };
}

export function importNoteTree(data, parentId) {
  let ids = [parentId];
  let notes = {};

  while (ids.length > 0) {
    const nextId = ids.shift();
    const next = data[nextId];
    const children = next.children.filter(id => data[id]?.id);
    const note = {
      id: next.id,
      text: next.text,
      color: next.color,
      at: next.at,
      children,
    };

    notes = { ...notes, [note.id]: note };
    ids = [...ids, ...children];
  }

  return notes;
}

export function getSaveFilePath(at = Date.now()) {
  const when = new Date(at);
  const year = when.getFullYear();
  const month = `${when.getMonth() + 1}`.padStart(2, '0');
  const date = `${when.getDate()}`.padStart(2, '0');

  return `notes_${year}_${month}_${date}.json`;
}
