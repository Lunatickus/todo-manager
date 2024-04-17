import { NavLink } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import { useUser } from "../../hooks/useUser";

export const Header = () => {
  const { user } = useUser();

  return (
    <header>
      <nav>
        <ul>
          {!user && (
            <>
              <li>
                <NavLink to="register">Registration</NavLink>
              </li>
              <li>
                <NavLink to="login">LogIn</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      {user && <UserMenu />}
    </header>
  );
};
