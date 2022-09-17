import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Template } from '@notprometey/react-slots';

import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import styles from './app.module.scss';

import Modal from './components/Modal';

const modalExample = `import { Slot, withSlots } from '@notprometey/react-slots';

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
`;

const usageExample = `import { Template } from '@notprometey/react-slots';

<Modal>
  <Template slot='header'>Header content</Template>
  modal content data
</Modal>\
`;

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className={styles.main}>
      <h1>React slots</h1>
      <p>
        In some cases, we may want to pass a template fragment to a child component, and let the child component render the fragment within its own template.
      </p>

      <p>
        For example, we may have a <b>{`<Modal>`}</b> component that supports usage like this:
      </p>

      <pre className={styles.code}>
        <code className='language-jsx'>{usageExample}</code>
      </pre>

      <p>
        The template of <b>{`<Modal>`}</b> looks like this:
      </p>

      <pre className={styles.code}>
        <code className='language-jsx'>{modalExample}</code>
      </pre>

      <p>
        The <b>{`<Slot>`}</b> elements are a slots outlet that indicates where the parent-provided slot content should be rendered, like this example:
      </p>

      <Modal>
        <Template slot='header'>Header content</Template>
        modal content data
      </Modal>

      <p>
        React slots mechanism is inspired by <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot'>the native Web Component</a> <b>{`<slot>`}</b> element.
      </p>
    </section>
  );
};

export default App;
