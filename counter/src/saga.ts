export function* helloSaga () {
  console.log({ saga: 'hello Saga!' })
  yield 1
}