import React from "react";

const ProfilePage = ({ params }: any) => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-white text-3xl font-bold">
          ProfilePage <span className="bg-red-400">{params.id}</span>
        </h1>
      </div>
    </section>
  );
};

export default ProfilePage;
