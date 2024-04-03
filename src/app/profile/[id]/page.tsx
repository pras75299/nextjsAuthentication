import React from "react";

const ProfilePage = ({ params }: any) => {
  return (
    <div>
      ProfilePage <span className="bg-red-400">{params.id}</span>
    </div>
  );
};

export default ProfilePage;
