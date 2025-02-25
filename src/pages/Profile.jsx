import { useContext, useState } from "react";
import { updateProfile } from "../api/auth";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { setUserInfo, userInfo, token } = useContext(AuthContext);

  const [nickname, setNickname] = useState("");

  //닉네임 수정
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  //폼제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname) {
      alert("변경할 닉네임을 입력하세요");
      return;
    }

    try {
      const data = await updateProfile(nickname, token);
      if (data) {
        setUserInfo({ ...userInfo, nickname });
        alert("닉네임이 변경되었습니다.");
        // console.log("닉네임 변경 후 : ", { ...userInfo, nickname });
        setNickname(" ");
      }
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full flex flex-col gap-4 h-fit">
      <h1 className="text-3xl font-bold">프로필 수정</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <div className=" flex flex-col gap-4">
          <label className="text-base" htmlFor="nickNameInput">
            닉네임 :{userInfo.nickname}
          </label>
          <input
            onChange={handleNicknameChange}
            className="p-4 border border-gray-300 rounded-lg w-full"
            id="nickNameInput"
            placeholder="수정하고싶은 닉네임을 입력해주세요"
          />
        </div>
        <button type="submit" className="bg-primary p-4 rounded-md text-white">
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default Profile;
