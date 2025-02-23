import { useState } from "react";

const Profile = () => {
  //무슨의미???
  //  const [nickname, setNickname] = useState(user?.nickname || "");

  const [nickname, setNickname] = useState("");

  //닉네임 수정
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  //폼제출
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold">프로필 수정</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <div className=" flex flex-col gap-4">
            <label className="text-base" htmlFor="nickNameInput">
              닉네임{" "}
            </label>
            <input
              onChange={handleNicknameChange}
              className="p-4 border border-gray-300 rounded-lg w-full"
              id="nickNameInput"
            />
          </div>
          <button
            type="submit"
            className="bg-primary p-4 rounded-md text-white"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
