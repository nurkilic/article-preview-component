import ContentOfShare from "./ContentOfShare";

const ShareBottom = ({ isOpen }) => {
  return (
    <div
      className={` md:hidden bg-[var(--very-dark-grayish-blue)] rounded-b-md  h-[4.3rem] absolute bottom-0 w-full flex items-center 
     ${
       isOpen ? "scale-y-100" : "scale-y-0"
     } transform transition duration-500 ease-in-out origin-bottom `}
    >
      <div className="ml-6">
        <ContentOfShare />
      </div>
    </div>
  );
};

export default ShareBottom;
