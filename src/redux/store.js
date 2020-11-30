
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state : {
        profilePage: {
            posts: [
                {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 2, id: 1},
                {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'lol', likesCount: 5, id: 2},
                {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 4, id: 1},
                {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 20, id: 1}
            ],
            newPostText:'hey'
        },
        messagesPage: {
            messages: [
                {id: 1, message:'hey'},
                {id: 2, message:'lol'}
            ],
            dialogs: [
                {person: 'Andrey', id: 1},
                {person: 'Sergey', id: 2}
            ],
            newMessageText: ''
        },
        sideBar: {
            friends: [
                {id: 1, name:'Andrey', photo: 'https://cdn25.img.ria.ru/images/99431/90/994319009_0:658:1333:1412_600x0_80_0_0_7688b0a347276cf2544bff2f6307e155.jpg'},
                {id: 2, name:'Sergey', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrEpWgOgJCxm-_p2icxaE5ggA9V3y3Qpisw&usqp=CAU'},
                {id: 2, name:'Elisey', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBFdnQ7lt6pRP_0KuInib8PCzAp7Jt0_9Dg&usqp=CAU'},
                {id: 3, name:'Anton', photo: 'https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer){
        this.callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this.callSubscriber(this._state);
    }
};
export default store;