import { useEffect, useState } from "react";
import { getTestResults } from "../data/testResults";

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
        return (
          <div key={result.id}>
            <div>
              <p>{result.nickname}</p>
              <p>{result.date}</p>
            </div>
            <div>
              <h2>{result.result}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestResultList;
