import React from 'react'
import { useWidth, useHeight } from 'windowsize';

export default function App() {
    const width = useWidth();
    const height = useHeight();

  return (
    <div>
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
}
