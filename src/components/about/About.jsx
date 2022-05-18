import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Coding Skills</h1>
        <p className="a-sub">
          I like solving coding problem and this enchanced my problem solving skills. 
        </p>
        <p className="a-desc">
          I'm familiar with C++(proficient), Java and Javascript.Also I have decent grip on Data Structures.Below are my coding profiles.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Coding profiles</h4>
            <ui>
              <ol><a href="https://leetcode.com/sahildalal23/">LeetCode</a></ol>
              <ol><a href="https://www.interviewbit.com/profile/sahil-dalal_798">Interviewbit</a></ol>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
