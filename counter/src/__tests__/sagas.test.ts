import { incrementAsync, delay } from "../saga";
import { call, put } from "redux-saga/effects";

test('incrementAsync', () => {
  const gen = incrementAsync()

  expect(gen.next().value).toEqual(call(delay, 1000))
  expect(gen.next().value).toEqual(put({ type: 'counter/increment' }))
  expect(gen.next()).toEqual({ done: true, value: undefined })
})
