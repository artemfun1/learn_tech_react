import { ASYNC_INC, DECREMENT, INCREMENT } from './types'

export function increment(){
return {
  type: INCREMENT
}
}


export function decrement(){
  return {
    type: DECREMENT
  }
}

export function asyncInc(){
  return {
    type: ASYNC_INC
  }
}

