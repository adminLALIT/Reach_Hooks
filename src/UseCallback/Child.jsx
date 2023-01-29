import React, { memo } from 'react'

function Child({demo}) {
    console.log("Call to Child");
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  )
}

export default memo(Child);
