import { useRef } from 'preact/hooks';
import { version } from '../../package.json';
import Controls from './Controls';
import Notes from './Notes';
import { getIconSource } from './Icon.js';
/*
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

import { clearScrollTarget, recordScroll } from '../redux/uiActions';

import NoteDragLayer from './NoteDragLayer';
import Editor from './Editor';

*/
import styles from './Home.module.css';

export default function Home() {
  const mainRef = useRef();
  /*
  const dis = useDispatch();
  const editingId = useSelector(state => state.ui.editingId);
  const scrollTarget = useSelector(state => state.ui.scrollTarget);

  useEffect(() => {
    if (mainRef.current && scrollTarget !== null) {
      mainRef.current.scrollTop = scrollTarget;
      dis(clearScrollTarget());
    }
  }, [scrollTarget]);
  */

  const handleScroll = (e) => {
    console.log('SCROLL', e.target.scrollTop);
    //??? dis(recordScroll(e.target.scrollTop));
  };

  /*
  if (editingId) {
    return <Editor />;
  }
  */

  return (
    <main ref={mainRef} className={styles.main} onScroll={handleScroll}>
      {/*<DndProvider backend={TouchBackend}>*/}
        <Notes />
      {/*<NoteDragLayer />*/}
      {/*</DndProvider>*/}
      <Controls />
      <div className={styles.version}>{`v${version}`}</div>
      {getIconSource()}
    </main>
  );
}
