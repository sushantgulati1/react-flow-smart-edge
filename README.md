# React Flow Smart Edge

Special Edge for React Flow that never intersects with other nodes.

<img src=".github/images/example.gif" width="688">

## Install

```bash
npm install @tisoap/react-flow-smart-edge
```

## Usage

```jsx
import React from 'react';
import ReactFlow from 'react-flow-renderer';
import { PathFindingEdge } from '@tisoap/react-flow-smart-edge';

const elements = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 430, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 230, y: 90 },
  },
  {
    id: 'e12',
    source: '1',
    target: '2',
    type: 'smart',
  },
];

export const Graph = (props) => {
  const { children, ...rest } = props;

  return (
    <ReactFlow
      edgeTypes={{
        smart: PathFindingEdge,
      }}
      {...rest}
    >
      {children}
    </ReactFlow>
  );
};
```

## Options

The `PathFindingEdge` takes the same options as a [React Flow Edge](https://reactflow.dev/docs/api/edges/).

## Example

There is a minimum example in this repository [`example` folder](https://github.com/tisoap/react-flow-smart-edge/tree/main/example). Clone this repository and run `cd example; npm i; npm start`.

## License

This project is [MIT](https://github.com/tisoap/react-flow-smart-edge/blob/main/LICENSE) licensed.
