import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error updating profile");
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      navigate("/Kanbas/Account/Signin");
    } catch (error) {
      alert("Error signing out");
    }
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            placeholder="Username"
            className="form-control mb-2"
          />
          <input
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="form-control mb-2"
          />
          <div>
            <button 
              onClick={updateProfile} 
              className="btn btn-primary w-100 mb-2"
            >
              Update
            </button>
            <button 
              onClick={signout}
              className="wd-signout-btn btn btn-danger w-100"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}