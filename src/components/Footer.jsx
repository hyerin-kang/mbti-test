const Footer = () => {
  return (
    <div className="bg-gray-200 p-4">
      <p className="text-gray-500">
        이 프로젝트는 React를 활용하여 제작되었습니다.
      </p>
      <p className="text-gray-500">
        © {new Date().getFullYear()} MadeBy KANG HYE RIN. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
