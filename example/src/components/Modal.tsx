import React from 'react';
import { Slot, withSlots } from '@notprometey/react-slots';

import styles from './modal.module.scss';

const Modal = () => {
  return (
    <section className={styles.modal}>
      <header>
        <Slot name='header' />
      </header>
      <section>
        <Slot />
      </section>
      <footer>
        <Slot name='footer'>Default footer content</Slot>
      </footer>
    </section>
  );
};

export default withSlots(Modal);
