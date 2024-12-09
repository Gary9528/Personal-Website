import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [

        {
          id: 3,
          name: "Location",
          content: "Hudson Valley, NY",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:gauravjitchhina@gmail.com">gauravjitchhina@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+1 845 542 9528">+1 845 542 9528</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 2,
          name: "Education",
          content: "SUNY University At Buffalo",
        },
        {
          id: 3,
          name: "Degree",
          content: "Bachelor of Science",
        },
        {
          id: 4,
          name: "Interest",
          content: "Soccer, Business",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
