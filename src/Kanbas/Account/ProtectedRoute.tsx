import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // If the user is signed in, allow access to the route
  if (currentUser) {
    return children;
  } else {
    // Otherwise, redirect to the Signin screen
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
}
