import { createStore } from "redux";
//     store는 나의 data를 넣는곳임 나의 state  
// state란 나의 application에서 바뀌는 data를 말한다
// store가 하는 일은 기본적으로 나의 data를 넣을 수 있는 장소를 생성해준다


const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number =document.querySelector("span")
number.innerText = 0

const countModifier = (count = 0,action) => {
  console.log(count,action)
  if (action.type === "ADD"){
    return count +1;
  }else if(action.type =="MINUS"){
    return count -1;
  }else{
    return count;
  }
//reducer는 나의 데이터를 수정하는 함수임 
//Reducer는 data를 modify 해주는 함수로 reducer가 
//return하는 것은 application에 있는 data가 됨.
//action은 redux에서 함수를 부를때 쓰는 두번째 parameter 또는 argument이다
}

const countStore = createStore(countModifier);
//createStore는 reducer를 요구한다
const onChange = () => {
  number.innerText =countStore.getState( )
}
countStore.subscribe(onChange)

// const handleAdd = () => {
//   countStore.dispatch({type:"ADD"})
// }
const handleMinus = () => {
  countStore.dispatch({type:"MINUS"})
}

add.addEventListener("click", () => countStore.dispatch({type:"ADD"}))
minus.addEventListener("click", handleMinus)


//정리
/* 데이터의 스토어를 만들고  dispatch를 통해 메세지를 스토어에 보내면 된다
그리고 액션 체크하면 됨 */

