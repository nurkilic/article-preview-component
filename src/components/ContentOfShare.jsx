import iconfacebook from "../assets/images/icon-facebook.svg";
import icontwitter from "../assets/images/icon-twitter.svg";
import iconpinterest from "../assets/images/icon-pinterest.svg";

const ContentOfShare = () => {
  return (
    <div className=" p-3 flex gap-4  items-center bg-[var(--very-dark-grayish-blue)] rounded-md px-5 ">
      <span className="text-[var(--grayish-blue)] uppercase tracking-[4px] text-xs ">
        Share
      </span>
      <img className="h-[1.15rem]" src={iconfacebook} alt="" />
      <img className="h-[1.15rem]" src={icontwitter} alt="" />
      <img className="h-[1.15rem]" src={iconpinterest} alt="" />
    </div>
  );
};

export default ContentOfShare;
