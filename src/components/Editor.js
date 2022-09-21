import { useEffect, useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { editNote } from '../redux/uiActions';
import { moveNoteByIndex, updateNote } from '../redux/notesActions';
import BigButton from './BigButton';
import Colors from './Colors';
import Icon from './Icon';
import NoteControls from './NoteControls';
import NoteHandle from './NoteHandle';
import NoteText from './NoteText';
import styles from './Editor.module.css';

export default function Editor() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [showColor, setShowColor] = useState(false);
  const dis = useDispatch();
  const all = useSelector(state => state.notes.all);
  const editingId = useSelector(state => state.ui.editingId);
  const lastColor = useSelector(state => state.notes.lastColor);
  const parentIds = useSelector(state => state.ui.parentIds);
  const parentId = parentIds.findLast((id) => id !== editingId) ?? 'root';
  const parent = all[parentId];
  const index = parent.children.findIndex((id) => id === editingId);
  const style = { background: color };

  useEffect(() => {
    const note = all[editingId];
    const white = '#ffffff';

    setText(note?.text);
    setColor(note?.color ?? lastColor ?? white);
  }, [all, editingId, lastColor]);

  const save = () => {
    dis(updateNote(editingId, text, color ));
    dis(editNote(null));
  };

  const buildFirstButton = () => {
    if (index === 0) {
      return null;
    }

    return (
      <button onClick={() => dis(moveNoteByIndex(parentId, index, 0))}>
        <Icon name='up' />
      </button>
    );
  };

  if (showColor) {
    return <Colors current={color} setColor={setColor} onClose={() => setShowColor(false)} />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <BigButton text='Color' classes={styles.color} onClick={() => setShowColor(true)} />
      </div>
      <div style={style} className={styles.note}>
        <NoteControls button={buildFirstButton()} />
        <NoteText text={text} setText={setText} />
        <NoteHandle />
      </div>
      <div className={styles.bottom}>
        <BigButton text='Cancel' classes={styles.cancel} onClick={() => dis(editNote(null))} />
        <BigButton text='Save' classes={styles.save} onClick={save} />
      </div>
    </main>
  );
}
