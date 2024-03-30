// import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useAuthentication from "../Hooks/useAuthentication";

const Header = () => {
  // const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // const dispatch = useDispatch();

  useAuthentication();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className={
        user
          ? "flex justify-between fixed w-full z-10 bg-gradient-to-b from-black"
          : "absolute z-10 bg-gradient-to-b from-black"
      }
    >
      <div className={user ? " ml-8 w-[160px] " : "w-[180px] ml-36"}>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex mr-12 p-2 items-center gap-2">
          <h3>{user?.displayName}</h3>
          <img
            className="w-10 h-10 rounded-md"
            src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="logo"
          />

          <button onClick={handlesignout}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
