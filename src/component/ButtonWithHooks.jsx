import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a function component")
    const [key2, setKey2] = useState(0)
  return (
    <>
        <button onClick={ () => setKey1("This is the NEW state of a function component")}>{key1}</button>
        <button onClick={ () => setKey2(1)}>{key2}</button>
    </>
  )
}

export default ButtonWithHooks