import React from 'react';

interface WebpackTestComponentProps {
  name: string;
}

const WebpackTestComponent = ({ name }: WebpackTestComponentProps) => {
  return <h1>Hello, {name}</h1>;
};

export default WebpackTestComponent;
