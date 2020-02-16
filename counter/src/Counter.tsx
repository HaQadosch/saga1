import React from 'react'

interface ICounter {

}

export const Counter: React.FC<ICounter> = () => {
  const [count, setCount] = React.useState<number>(0)

  return (
    <>
      <p>{ count }</p>
      <button onClick={ handleOnClick_Add }><span role='img' aria-label='increment'>👍🏻</span></button>
      <button onClick={ handleOnClick_Min }><span role='img' aria-label='decrement'>👎🏻</span></button>
    </>
  )

  function handleOnClick_Add (_: React.MouseEvent<HTMLButtonElement>): void {
    setCount(count => count + 1)
  }
  function handleOnClick_Min (_: React.MouseEvent<HTMLButtonElement>): void {
    setCount(count => count - 1)
  }
}