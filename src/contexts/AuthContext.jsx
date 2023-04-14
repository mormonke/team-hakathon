import React, { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import { auth } from "../firebase";

import { ACTIONS, ADMINS } from "../utils/const";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const initState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function register({ email, password, displayName, photoURL }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName, photoURL });
    } catch (error) {
      console.log(error);
    }
  }

  async function login({ email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.user,
        payload: user,
      });
    });
  }, []);

  function isAdmin() {
    if (state.user) {
      const bool = ADMINS.includes(state.user.email);
      return bool;
    }
  }

  const values = {
    user: state.user,
    register,
    login,
    logout,
    isAdmin,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}

export default AuthContext;
