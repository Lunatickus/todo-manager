import { FaUser } from "react-icons/fa";
import { UserMenuWrapper } from "./UserMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth.selectors";
import { logOut } from "../../redux/auth/authOperations";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserMenuWrapper>
      <div className="user-wrapper">
        <FaUser />
        {user.email && <p className="user-name">{user.name}</p>}
      </div>
      <button
        type="button"
        className="log-out-button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </UserMenuWrapper>
  );
};
