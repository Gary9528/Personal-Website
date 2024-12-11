import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2017 - 2021",
          institute: "Valley Central High School",
          degree: "Honors Diploma",
        },
        {
          id: 2,
          year: "2021 - Spring 2025",
          institute: "SUNY University At Buffalo",
          degree: "Bachelor of Science",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "March 2024 - August 2024",
          institute: "Securitas Technology",
          degree: "Backend Software Engineer Intern",
        },
        {
          id: 2,
          year: "May 2022 - January 2024",
          institute: "DBL Express",
          degree: "Technology Intern",
        },
        {
          id: 3,
          year: "2019 - 2021",
          institute: "Nanak LLC",
          degree: "Associate Store Manager",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
