import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <nav>
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Account/${link}`}>
          {link}
        </Link>
      ))}
    </nav>
  );
}
