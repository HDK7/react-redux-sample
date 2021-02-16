import {createStore} from 'redux';

export default createStore(function(state, action){
    // size와 type 등의 객체가 action으로 넘어온다.
    // state는 반환값
    console.log(state)
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)