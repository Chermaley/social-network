type FriendType = {
    id: number,
    name: string,
    photo: string
}
let initialState = {
    friends: [
        {id: 4, name:'Anton', photo: 'https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg'},
        {id: 4, name:'Anton', photo: 'https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg'},
        {id: 4, name:'Anton', photo: 'https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg'},
        {id: 4, name:'Anton', photo: 'https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg'},
    ] as Array<FriendType>
};
export type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState): InitialStateType => {
    return state;
};

export default sidebarReducer;