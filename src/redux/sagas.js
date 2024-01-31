
import {call, put, takeEvery} from 'redux-saga/effects'
import { FETCH_POSTS, REQUEST_POST } from './types'
import { hideLoader, showLoader } from './actions'

export function* sagaWatcher(){
  yield takeEvery(REQUEST_POST,sagaWorker)
}

function* sagaWorker(){
   yield put(showLoader())
   const payload = yield call(fetchPosts)
   yield put({type:FETCH_POSTS,payload})
    yield put(hideLoader())
}

async function fetchPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
  return await response.json()
}