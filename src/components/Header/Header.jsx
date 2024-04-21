import { NavLink } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth.selectors";

export const Header = () => {
  const user = useSelector(selectUser);
  const email = user.email;

  return (
    <header>
      <nav>
        <ul>
          {!email && (
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
      {email && <UserMenu />}
    </header>
  );
};
