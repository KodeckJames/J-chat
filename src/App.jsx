import React from 'react'
import Left from './sections/Left'
import Center from './sections/Center'
import Right from './sections/Right'
import Blank from './sections/Blank'

const App = () => {
  return (
    <>
      <main className=" flex">
        <>
          <Left />
        </>
        <>
          <Center />
        </>
        <>
          <Blank />
        </>
        <>
          <Right />
        </>
      </main>
    </>
  )
}

export default App
