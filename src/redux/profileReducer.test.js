import profileReducer, {addNewPost, deletePost} from "./profileReducer";

const state = {
    posts: [
        {
            img: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
            text: 'wow',
            likesCount: 2,
            id: 1
        },
        {
            img: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
            text: 'hey',
            likesCount: 2,
            id: 2
        },
    ]
};
let action = addNewPost('yey');
let newState = profileReducer(state, action);

it('length of posts should be incremented', () => {
    expect(newState.posts.length).toBe(3);
});
it('text of new post must be "yey"', () => {
    expect(newState.posts[2].text).toBe('yey');
});
it('after deleting length of post must be decremented', () =>{
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
it('after deleting length shouldn,t decremented if id is incorrect', () =>{
    let action = deletePost(100500);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});