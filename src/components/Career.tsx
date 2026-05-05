import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE-AIML</h4>
                <h5>ABES Engineering College, Ghaziabad</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science & Engineering with
              specialization in AI/ML. CGPA: 8.08. Active member of the Enigma
              Programming Club, contributing to coding discussions, DSA practice
              sessions, and competitive programming activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Trainee</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>Oct - Dec 2025</h3>
            </div>
            <p>
              Selected for Infosys Springboard Internship 6.0 – Batch 6.
              Gained hands-on experience in Java programming, object-oriented
              concepts, and software development practices. Worked on
              problem-solving, debugging, and building applications using core
              Java concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programmer</h4>
                <h5>LeetCode &amp; CodeChef</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Solved 400+ DSA problems on competitive programming platforms.
              LeetCode Rating: 1617 | CodeChef: 1402 (2 Star). Hackathon
              achiever — 3rd Place at Webathon, 2nd Place at Hackoverse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
