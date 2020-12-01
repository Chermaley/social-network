import FriendList from "./firendList";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    };
};
const FriendListWrapper = connect(mapStateToProps)(FriendList);
export default FriendListWrapper;

