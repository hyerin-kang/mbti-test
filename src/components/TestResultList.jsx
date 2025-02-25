import { useEffect, useState } from "react";
import { getTestResults } from "../data/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultList = () => {
  const [results, setResults] = useState([]); // 상태값
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTestResults(); //비동기 함수 호출
        setResults(data);
      } catch (error) {
        console.log("데이터 받아오기 실패 :", error);
      }
    };
    getData(); //비동기 함수 실행
  }, []);

  return (
    <div>
      {results.map(function (result) {
        const resultMBTI = result.result;
        const resultMBTIInfo = mbtiDescriptions[resultMBTI];
        return (
          <div key={result.id} className="p-4 bg-white mb-8 rounded-md">
            <div className="flex justify-between border-b-2 pb-2 mb-2 items-center text-gray-700">
              <p className="text-xl">{result.nickname}</p>
              <p>{result.date}</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl text-primary mb-2">
                {result.result}
              </h2>
              <p className="text-gray-500">{resultMBTIInfo}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestResultList;
