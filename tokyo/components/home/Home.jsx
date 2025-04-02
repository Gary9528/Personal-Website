"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/Headshot.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Gary Chhina</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Backend Engineer",
                  "Fullstack Engineer",
                  "Cybersecurity Analyst",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
            Full-stack developer with a focus on backend engineering and cybersecurity, building scalable and secure systems with real-world impact.            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
