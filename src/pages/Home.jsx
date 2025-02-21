import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl">무료 성격 테스트</h1>
        <p className="text-xl">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
        <div className="flex gap-6">
          <div className="shadow-lg flex-1 p-8 rounded-md">
            <h2 className="text-xl font-semibold text-primary-color mb-4">
              성격 유형 검사
            </h2>
            <p>
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </p>
          </div>
          <div className="shadow-lg flex-1 p-8 rounded-md">
            <h2 className="text-xl font-semibold text-primary-color mb-4">
              성격 유형 이해
            </h2>
            <p>
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </p>
          </div>
          <div className="shadow-lg flex-1 p-8 rounded-md">
            <h2 className="text-xl font-semibold text-primary-color mb-4">
              팀 평가
            </h2>
            <p>
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              배워보세요.
            </p>
          </div>
        </div>
        <Link
          to="/login"
          className="bg-primary py-2 px-6 rounded-full text-white"
        >
          로그인하기
        </Link>
      </div>
    </main>
  );
};

export default Home;
