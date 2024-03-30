import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useAuthentication;
