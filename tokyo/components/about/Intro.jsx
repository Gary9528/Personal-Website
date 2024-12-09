import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Gary Chhina",
    designation: "Software Engineer",
    text: (
      <>
<p>
  Hi, my name is Gary Chhina, and I’m a senior Computer Science student at the University at Buffalo. Over the past few years, I’ve focused on backend engineering and cloud-based development, working with technologies like Google Cloud Platform, Python, and React.
</p>
<p>
  I enjoy building scalable applications and setting up efficient data pipelines that support real-world use. With hands-on experience in backend systems and cloud infrastructure, I’m dedicated to creating solutions that are both reliable and impactful.
</p>


      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
