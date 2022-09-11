import React from 'react';
import { Template } from 'slots';

import Inner from './Inner';

const App = () => {
  return (
    <Inner>
      <Template slot='test'>222222</Template>
    </Inner>
  );
};

export default App;
