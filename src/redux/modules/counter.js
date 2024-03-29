import { createSlice } from "@reduxjs/toolkit";

// action value
// const PLUS_ONE = "counter/PLUS_ONE";
// const MINUS_ONE = "counter/MINUS_ONE";
// const PLUS_N = "counter/PLUS_N";
// const MINUS_N = "counter/MINUS_N"

// action creator : action value를 return하는 함수
// export const plusOne = () => {
//     return {
//         type: PLUS_ONE,
//     };
// };
// export const minusOne = () => {
//     return {
//         type: MINUS_ONE,
//     };
// };

// export const plusN = (payload) => {
//     return {
//         type: PLUS_N,
//         payload: payload,
//     };
// };

// export const minusN = (payload) => {
//     return {
//         type: MINUS_N,
//         payload,
//     };
// };

//초기 상태 값
const initialState = {
    number: 0,
};
//const [number, setNumber] = useState(0); 이렇게 작성했었음!

//Reducer : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input  : state와 action
// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다!!
// ex: payload가 3이다. 3만큼을 plus
// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case PLUS_ONE:
//             return {
//                 number: state.number + 1,
//             };
//         case MINUS_ONE:
//             return {
//                 number: state.number - 1,
//             };
//         case PLUS_N:
//             return {
//                 number: state.number + action.payload,
//             };
//         case MINUS_N:
//             return {
//                 number: state.number - action.payload,
//             };
//         default:
//             return state;
//     }
// };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        addNumber: (state,action) => {
            state.number = state.number + action.payload;
        },
        minusNumber: (state,action) => {
            state.number = state.number - action.payload;
        },
    },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;