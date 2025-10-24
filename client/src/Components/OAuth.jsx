import {app} from "../firebase";
import { GoogleAuthProvider , signInWithPopup, getAuth} from "firebase/auth";
export default function OAuth() {
  const handleGoogleClick = async () => {
    // Logic to handle Google OAuth flow
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      console.log("Google OAuth successful:", result);
    } catch (error) {
      console.error("Error during Google OAuth:", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full bg-red-700 text-white py-3 rounded-lg uppercase font-semibold hover:bg-red-700 transition duration-200 placeholder-opacity-95"
    >
      Continue with google
    </button>
  );
}
