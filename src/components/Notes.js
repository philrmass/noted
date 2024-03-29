import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { clearScrollId } from '../redux/notesActions';
import { editNote } from '../redux/uiActions';
import Note from './Note';
import styles from './Notes.module.css';

export default function Notes() {
  const dis = useDispatch();
  const allNotes = useSelector(state => state.notes.all);
  const scrollId = useSelector(state => state.notes.scrollId);
  const parentIds = useSelector(state => state.ui.parentIds);
  const parentId = parentIds.at(-1) ?? 'root';
  const parent = allNotes[parentId];
  const showParent = parent?.text || parent?.color;
  const ids = parent?.children ?? [];
  const notes = ids.map((id) => allNotes[id]);

  useEffect(() => {
    if (scrollId) {
      const element = document.getElementById(scrollId);

      if (element) {
        element.scrollIntoView({ block: 'nearest' });
        dis(clearScrollId());
      }
    }
  }, [scrollId, dis]);

  const background = parent?.color ?? '#ffffff';
  const parentStyle = { background };

  const buildParent = () => {
    if (!showParent) {
      return (
        <div className={styles.appName}>
          {buildLogo()}
          Noted
        </div>
      );
    }

    return (
      <li id={parentId} className={styles.parent} style={parentStyle}>
        <div className={styles.handle} />
        <div className={styles.text} onClick={() => dis(editNote(parentId))}>
          {parent?.text}
        </div>
        <div className={styles.handle} />
      </li>
    );
  };

  const buildLogo = () => (
    <div className={styles.logo}>
      <svg viewBox='-20 -20 140 140' xmlns="http://www.w3.org/2000/svg">
        <rect x='0' y='0' width='100' height='100' fill='rgb(88, 88, 88)' />
        <path d='M20 100 V20 H40 L60 47 V0 H80 V80 H60 L40 53 V100 H20' stroke='none' fill='rgb(168, 232, 255)' />
      </svg>
    </div>
  );

  return (
    <ul className={styles.notes}>
      {buildParent()}
      {notes.map((note) => (
        <li id={note.id} key={note.id}>
          <Note parentId={parentId} note={note} />
        </li>
      ))}
    </ul>
  );
}
