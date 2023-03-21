import { useSession } from "next-auth/react";
import AuthShowcase from "../auth-showcase";


const User = () => {
  const { data: session } = useSession();

  if (!session) {
    // Handle unauthenticated state, e.g. render a SignIn component
    return <AuthShowcase />;
  }

  return <p>Welcome {session.user.name}!</p>;
};
