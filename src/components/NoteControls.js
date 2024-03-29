import { useState } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { removeNote } from '../redux/notesActions';
import BigButton from './BigButton';
import Dialog from './Dialog';
import Icon from './Icon';
import styles from './NoteControls.module.css';

export default function NoteControls({ parentId, id, childCount, button }) {
  const [isOpen, setIsOpen] = useState(false);
  const dis = useDispatch();

  const handleRemove = () => {
    if (!childCount) {
      dis(removeNote(parentId, id));
    } else {
      setIsOpen(true);
    }
  };

  const confirmRemove = () => {
    setIsOpen(false);
    dis(removeNote(parentId, id));
  };

  const buildChildren = () => {
    if (!childCount && !button) {
      return <div />;
    }
    
    if (button) {
      return button;
    }

    return <div className={styles.count}>{childCount}</div>;
  };

  return (
    <>
      <div className={styles.controls}>
        <button onClick={handleRemove}>
          <Icon name='cross' />
        </button>
        <div className={styles.icon}>
          {buildChildren()} 
        </div>
      </div>
      <Dialog isOpen={isOpen}>
        <div className={styles.text}>
          The note has children. Would you like to remove the note and all children?
        </div>
        <BigButton text='Remove' onClick={confirmRemove} />
        <BigButton text='Cancel' onClick={() => setIsOpen(false)} />
      </Dialog>
    </>
  );
}
