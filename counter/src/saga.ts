import { put, takeEvery, all } from "redux-saga/effects"

function* helloSaga () {
  console.log({ saga: 'hello Saga!' })
  yield 1
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* incrementAsync () {
  yield delay(1000)
  yield put({ type: 'counter/increment' })
}

function* watchIncrementAsync () {
  // @ts-ignore
  yield takeEvery('saga/incrementAsync', incrementAsync)
}

export function* rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}