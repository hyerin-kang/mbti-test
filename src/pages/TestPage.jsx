import { useContext, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../data/testResults";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const TestPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    //여기서 getUserProfile 받아완거 닉네임,id
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    const userResult = {
      id: crypto.randomUUID(),
      nickname: user.nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date(),
      userId: user.id,
    };
    console.log(userResult);
    await createTestResult(userResult);

    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
