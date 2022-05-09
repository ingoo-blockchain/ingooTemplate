import { takeLatest, call, put } from 'redux-saga/effects'

async function upAPI(payload){
    console.log(payload)
    // return await axios.post('http://localhost:3500',payload)
    return new Promise( (res,rej)=>{
        setTimeout( ()=>{
            res(true)
        },1000 )
    } )
}

async function downAPI(payload){
    return new Promise( (resvole,reject)=>{
        setTimeout( ()=>{
            resvole(true)
        },1000 )
    } )
}

// take 매서드로 호출된 함수는 action {type:'add_comment',payload:{ userid:'web7722',content:'asdfasdf',date:'2022-05-06' }}
function* counterUp(action){
    // 여기함수에서. API 내용을 작성해주셔야합니다.
    try {
        // 인자값이 2개 
        // 1. 함수명,
        // 2. 1.함수에 대한 인자값,
        console.log('SAGA')
        const result = yield call(upAPI,action.payload)
        // dispatch 성공에대한 프로세스
        yield put({
            type:'COUNTER/UP_SUCCESS'
        })
    } catch (e) {
        // dispatch 실패에대한 프로세스 
        yield put({
            type:'COUNTER/UP_FAILURE'
        })
    }
}

function* counterDown(action){
    try {
        yield call(downAPI,action.payload)
        yield put({
            type:'COUNTER/DOWN_SUCCESS'
        })
    } catch (e) {
        yield put({
            type:'COUNTER/DOWN_FALIURE'
        })
    }
}

// action -> dispatch( {type:'UP'} )
export default function* watchCounterUp(){
    
    // take 인자값이 2개 
    // 1개는 action.type 내용을 넣어야함, {type:'up'} , {type:'add_comment'}
    // type이 추적이 되었다면, 실행할 함수명을 적어주셔야합니다. function* 함수여야함.
    yield takeLatest('COUNTER/UP_REQUEST',counterUp)
    yield takeLatest('COUNTER/DOWN_REQUEST',counterDown)
}



