const searchreducer = (state = "", action) => {
    if(action.type==="search"){
        state=action.payload;
        return state; 
    }
    else{
        return state;
    }
}
export default searchreducer;