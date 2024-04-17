import { FaUser } from "react-icons/fa";
import { UserMenuWrapper } from "./UserMenu.styled";
import { useLogOut } from "../../hooks/useLogOut";
import { useUser } from "../../hooks/useUser";

export const UserMenu = () => {
  const logOut = useLogOut();
  const { user } = useUser();

  return (
    <UserMenuWrapper>
      <div className="user-wrapper">
        <FaUser />
        {user && <p className="user-name">{user.user.name}</p>}
      </div>
      <button type="button" className="log-out-button" onClick={logOut}>
        Log Out
      </button>
    </UserMenuWrapper>
  );
};
