import { useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { saveData, loadData } from '../utilities/files';
import { importNotes, getSaveFilePath } from '../utilities/notes';
import { setNotes } from '../redux/notesActions';
import BigButton from './BigButton';
import Dialog from './Dialog';
import styles from './Menu.module.css';

export default function Menu({ isOpen, close }) {
  const [status, setStatus] = useState('');
  const dis = useDispatch();
  const allNotes = useSelector(state => state.notes.all);

  const save = async () => {
    const count = Object.keys(allNotes).length - 1;
    const filePath = getSaveFilePath();

    await saveData(filePath, allNotes);
    setStatus(`Saved ${count} notes to ${filePath}`);
  };

  const load = async () => {
    const data = await loadData();
    const { notes, message } = importNotes(data);

    if (notes) {
      dis(setNotes(notes));
    }
    setStatus(message);
  };

  const copy = async () => {
    const count = Object.keys(allNotes).length - 1;
    const data = JSON.stringify(allNotes, null, 2);

    try {
      await navigator.clipboard.writeText(data);
      setStatus(`Copied ${count} notes to clipboard`);
    } catch (err) {
      setStatus(`Could not write to clipboard: ${err.message}`);
    }
  };

  const handleClose = () => {
    setStatus('');
    close();
  };

  return (
    <Dialog isOpen={isOpen}>
      <div className={styles.controls}>
        <BigButton text='Save' onClick={save} />
        <BigButton text='Load' onClick={load} />
        <BigButton text='Copy' onClick={copy} />
        <div className={styles.status}>
          {status}
        </div>
      </div>
      <BigButton text='Close' onClick={handleClose} />
    </Dialog>
  );
}
