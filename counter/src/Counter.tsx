import React from 'react'
import { AppDispatch } from './Store/store'
import { useDispatch, useSelector } from "react-redux";
import { RootState, increment, decrement } from './Store/rootReducer';

interface ICounter {

}

export const Counter: React.FC<ICounter> = () => {
  const dispatch: AppDispatch = useDispatch()
  const { count } = useSelector(({ counter }: RootState) => counter)

  return (
    <>
      <p>{ count }</p>
      <button onClick={ handleOnClick_Add }><span role='img' aria-label='increment'>👍🏻</span></button>
      <button onClick={ handleOnClick_Min }><span role='img' aria-label='decrement'>👎🏻</span></button>
    </>
  )

  function handleOnClick_Add (_: React.MouseEvent<HTMLButtonElement>): void {
    dispatch(increment())
  }
  function handleOnClick_Min (_: React.MouseEvent<HTMLButtonElement>): void {
    dispatch(decrement())
  }
}