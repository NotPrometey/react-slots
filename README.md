# React slots

slots for react app. You can find a demo [here](https://notprometey.github.io/react-slots/)

[![NPM](https://img.shields.io/npm/v/@notprometey/react-slots.svg)](https://www.npmjs.com/package/@notprometey/react-slots) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @notprometey/react-slots
```

## Usage

```tsx
import React from 'react'
import { Slot, withSlots } from '@notprometey/react-slots';

const Modal = () => {
  return (
    <div>
      <Slot>default content of default slot</Slot>
      <Slot name='test'>default content of test slot</Slot>
    </div>
  );
};

export default withSlots(Modal);
```

```tsx
import React from 'react'
import { Template } from '@notprometey/react-slots';

import Modal from './components/Modal';

const App = () => {
  return (
    <Modal>
      <span>content to default slot</span>
      <Template slot='test'>content to test slot</Template>
    </Modal>
  );
};
```

## License

MIT © [notprometey](https://github.com/notprometey)
