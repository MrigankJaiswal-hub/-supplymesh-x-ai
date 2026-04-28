import { useEffect } from "react";
import Home from "./pages/Home";
import { loginDemoUser } from "./firebase/firebase";

export default function App() {
  useEffect(() => {
    loginDemoUser()
      .then(() => {
        console.log("Guest user logged in");
      })
      .catch((error) => {
        console.error("Anonymous login failed:", error);
      });
  }, []);

  return <Home />;
}