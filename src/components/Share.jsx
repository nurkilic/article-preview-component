import ContentOfShare from "./ContentOfShare";


const Share = () => {
  return (
    <div className="absolute bottom-12 -right-[5.9rem]  w-52 max-md:hidden ">
      <ContentOfShare/>
      <div className="absolute -bottom-2 right-1/2 translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[var(--very-dark-grayish-blue)]"></div>
    </div>
  );
};

export default Share;
