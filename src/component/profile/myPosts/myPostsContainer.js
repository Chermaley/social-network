import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addNewPost: () => {
            dispatch(addPostActionCreator());
        }
    };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;