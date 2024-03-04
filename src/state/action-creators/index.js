const searchfn = (searchText) => {
    return (dispatch) => {
        dispatch(
            {
                type:"search",
                payload:searchText
            }
        )
    }
}
export default searchfn;