import React from "react";

interface RollupTestComponentProps {
  name: string;
}

const RollupTestComponent = ({ name }: RollupTestComponentProps) => {
  return <h1>Hello, {name}</h1>;
};

export default RollupTestComponent;
