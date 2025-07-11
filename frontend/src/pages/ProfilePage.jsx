import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();

  return <div>Photographer Profile Page - ID: {id}</div>;
};

export default ProfilePage;
