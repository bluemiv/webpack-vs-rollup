import React from 'react';
import './App.css';
import { RollupTestComponent } from '@webpack-vs-rollup/rollup-core';
import { WebpackTestComponent } from '@webpack-vs-rollup/webpack-core';

function App() {
  return (
    <div>
      <RollupTestComponent name="rollup core component" />
      {/*<WebpackTestComponent name="webpack core component" />*/}
    </div>
  );
}

export default App;
