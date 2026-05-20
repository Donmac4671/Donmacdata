import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}
