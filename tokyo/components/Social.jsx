import React from "react";


const SocialShare = [
  // {
  //   iconName: "facebook",
  //   link: "https://www.facebook.com/",
  // },
  // { iconName: "twitter", link: "https://twitter.com/" },
  {
    iconName: "linkedin",
    link: "www.linkedin.com/in/gary-chhina",
  },
  {
    iconName: "github",
    link: "https://github.com/Gary9528",
  },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
