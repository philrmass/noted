import { useEffect, useRef } from 'preact/hooks';
import { version } from '../../package.json';
import Controls from './Controls';
import Notes from './Notes';
import { getIconSource } from './Icon.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearScrollTarget, recordScroll } from '../redux/uiActions';
import Editor from './Editor';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import NoteDragLayer from './NoteDragLayer';

import styles from './Home.module.css';

export default function Home() {
  const mainRef = useRef();
  const dis = useDispatch();
  const editingId = useSelector(state => state.ui.editingId);
  const scrollTarget = useSelector(state => state.ui.scrollTarget);

  useEffect(() => {
    if (mainRef.current && scrollTarget !== null) {
      mainRef.current.scrollTop = scrollTarget;
      dis(clearScrollTarget());
    }
  }, [scrollTarget, dis]);

  const handleScroll = (e) => {
    dis(recordScroll(e.target.scrollTop));
  };

  if (editingId) {
    return (
      <>
        <Editor />;
        {getIconSource()}
      </>
    );
  }

  return (
    <main ref={mainRef} className={styles.main} onScroll={handleScroll}>
      <DndProvider backend={TouchBackend}>
        <Notes />
        <NoteDragLayer />
      </DndProvider>
      <Controls />
      <div className={styles.version}>{`v${version}`}</div>
      {getIconSource()}
    </main>
  );
}
