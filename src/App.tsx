import React, { useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Thread from "./components/routes/thread/Thread";
import UserProfile from "./components/routes/userProfile/UserProfile";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "./store/user/Reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // todo: replace with GraphQL call
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  const renderHome = (props: any) => <Home {...props} />;
  const renderThread = (props: any) => <Thread {...props} />;
  const renderUserProfile = (props: any) => <UserProfile {...props} />;

  return (
    <Routes>
      <Route path="/" element={renderHome({})} />
      <Route path="/categorythreads/:categoryId" element={renderHome({})} />
      <Route path="/thread/:id" element={renderThread({})} />
      <Route path="/userprofile/:id" element={renderUserProfile({})} />
    </Routes >
  );
}

export default App;
