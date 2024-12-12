const { default: Image } = require("next/image");

module.exports = [
  {
    id: 1,
    title: "Rubik's Cube Game in ARM Assembly | ARM Assembly Language",
    img: "/img/news/1.jpg",
    poster: "GARY CHHINA",
    date: "May 2024",
    descriptions: (
      <>
        <div className="descriptions">
          <p className="bigger">
            Developed a Rubik's Cube game in ARM assembly language, inspired by the classic 1982 Atari 2600 game. This project provided a unique opportunity to understand programming at a much deeper and lower level, utilizing microprocessor inputs and outputs for full implementation.
          </p>

          <p className="bigger">
            The game required player actions like movement across a 3x3 cube face, color swapping, and cube rotation, all with real-time tracking of moves and elapsed time. This project significantly challenged my problem-solving skills and deepened my grasp of ARM assembly and microprocessor I/O handling.
          </p>

          <p>
            <strong>Situation:</strong> The goal was to recreate a Rubik's Cube game in ARM assembly, with functionality such as color matching on each cube face, fluid movement animations, and precise game state management. This project aimed to expand my knowledge of both game logic and low-level assembly programming.
          </p>

          <p>
            <strong>Task:</strong> The objective was to build an interactive game where players could navigate the cube, swap colors, and rotate the cube, all with real-time motion animations and a move counter to track performance.
          </p>

          <p>
            <strong>Action:</strong> Developed a 3x3 grid for the cube face, with controls using W, A, S, D, and spacebar for navigation and swapping. Integrated timer-based animations for smooth transitions and used the Alice EduBase board for button-controlled game timing. Utilized microprocessor inputs and outputs to manage game actions and display feedback via LEDs.
          </p>

          <p>
            <strong>Result:</strong> Successfully launched a fully functioning Rubik's Cube game with real-time feedback, color matching mechanics, and a responsive interface. This project deepened my understanding of programming fundamentals and the intricacies of low-level hardware interaction.
          </p>
        </div>
      </>
    ),
},


  {
    id: 2,
    title: "Custom TCP Server | Python, MongoDB, Docker",
    img: "/img/news/2.jpg",
    poster: "GARY CHHINA",
    date: "April 2024",
    descriptions: (
      <>
        <div className="descriptions">
          <p className="bigger">
            Designed and developed a custom TCP server to deepen my backend development skills, focusing on building functionalities from scratch without relying on third-party libraries.
          </p>

          <p className="bigger">
              Developed real-time messaging features using WebSockets, creating both live chat and video chat capabilities. Built message buffering and frame parsing mechanisms to handle large payloads and continuous data flows, ensuring smooth and uninterrupted communication.
            </p>
  
          <p>
            <strong>Situation:</strong> This project aimed to enhance my backend expertise by creating a fully custom TCP server. My goal was to gain a stronger understanding of the underlying mechanics by avoiding libraries and building core functionalities from scratch, such as request handling, authentication, and real-time communication.
          </p>
  
          <p>
            <strong>Task:</strong> I set out to design a robust, scalable server capable of handling custom HTTP requests and supporting real-time features, while ensuring a high level of security and performance. This included building a foundation that could manage user authentication, secure data transfer, and session management.
          </p>
  
          <p>
            <strong>Action:</strong> Constructed the TCP server with custom request parsing logic, deploying it in a Docker container to streamline scalability and testing. Implemented secure user authentication using salted and hashed passwords, password validation, and session management with auth and XSRF tokens, without using pre-built libraries. For user login and access management, I integrated Spotify OAuth 2.0, adding a layer of third-party authentication and broadening my understanding of custom authorization flows.
          </p>
  
          <p>
            <strong>Result:</strong> Successfully deployed a high-performance TCP server that handled real-time data transmission while maintaining security with HttpOnly and secure cookies, HTML escaping for XSS prevention, and HTTPS with WSS for WebSockets. This project deepened my backend development knowledge and gave me hands-on experience in building reliable server solutions from the ground up.
          </p>
        </div>
      </>
    ),
  },
  
  {
    id: 3,
    title: "Weather Wizards Web Application | Linux, Apache, MySQL, PHP, Javascript, React",
    img: "/img/news/3.jpg",
    poster: "GARY CHHINA",
    date: "January 2024",
    descriptions: (
      <>
        <div className="descriptions">
          <p className="bigger">
            Developed and deployed the backend using the LAMP stack (Linux, Apache, MySQL, PHP) to provide users with real-time and historical weather data, with an emphasis on secure and scalable design.
          </p>

          <p className="bigger">
            Implemented server-side load balancing to efficiently handle high traffic and multiple concurrent requests, leveraging the One Call API 3.0 for seamless data integration and weather forecasting.
          </p>

          <p>
            <strong>Situation:</strong> This project aimed to create a comprehensive weather web application that could provide users with tailored weather-based activity suggestions. The objective was to ensure a reliable, user-friendly interface that could handle location-based queries and user preference settings.
          </p>

          <p>
            <strong>Task:</strong> My goal was to build a robust backend infrastructure capable of managing secure user authentication, session handling, and database management. This included setting up automated backup and recovery processes for MySQL databases to ensure data integrity and availability.
          </p>

          <p>
            <strong>Action:</strong> Built the backend using Linux, Apache, MySQL, and PHP, integrating bcrypt for password encryption and token-based session management. Configured load balancing on the server side to enhance application scalability and reliability, and scheduled cron jobs for automated backups, data replication, and recovery strategies to protect user data.
          </p>

          <p>
            <strong>Result:</strong> Successfully launched a responsive and scalable web application that delivers accurate weather forecasts and personalized activity recommendations based on user preferences. The project enhanced my proficiency in full-stack development and the LAMP stack, as well as in database management and load balancing.
          </p>
        </div>
      </>
    ),
},

{
  id: 4,
  title: "Theta Tau Mobile Application | JavaScript, React Native, MySQL, Expo",
  img: "/img/news/4.jpg",
  poster: "GARY CHHINA",
  date: "November 2023",
  descriptions: (
    <>
      <div className="descriptions">
        <p className="bigger">
          Led the design and implementation of an iOS mobile application for my fraternity, Theta Tau, creating a modern, user-friendly front-end architecture. This app not only showcases our fraternity’s values and members but also serves as a tool for managing meetings and secure access.
        </p>

        <p className="bigger">
          Integrated local JSON databases to dynamically populate content, allowing for seamless updates to member profiles and fraternity information. This project was a personal initiative to deepen my skills in React Native and full-stack mobile app development.
        </p>

        <p>
          <strong>Situation:</strong> The objective was to build an engaging, secure mobile application that could reflect the fraternity’s identity while providing essential tools for members, such as real-time meeting authentication and access.
        </p>

        <p>
          <strong>Task:</strong> My goal was to develop a comprehensive app using React Native, incorporating secure user sign-ins, dynamic data handling, and meeting access features to create a functional and interactive user experience.
        </p>

        <p>
          <strong>Action:</strong> Constructed a modern front-end design with React Native, using JSON databases to enable dynamic data loading for profiles and pages. Programmed a robust backend authentication system in MySQL, sending secure requests to verify user permissions and safeguard privileged features. Added a dynamic meeting code generation feature, allowing members to authenticate and access meetings through database validation processes in real-time.
        </p>

        <p>
          <strong>Result:</strong> Successfully deployed a high-functionality, visually appealing app that promotes fraternity values, highlights members, and provides secure, real-time meeting management. This project refined my skills in mobile app development, backend integration, and data management, providing valuable experience in building secure and scalable applications.
        </p>
      </div>
    </>
  ),
},

];
