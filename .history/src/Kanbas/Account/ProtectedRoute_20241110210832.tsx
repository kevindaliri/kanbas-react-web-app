import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const currentUser = useSelector((state: any) => state.account?.currentUser);

  if (currentUser) {
    return <>{children}</>;
  } else {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
}
