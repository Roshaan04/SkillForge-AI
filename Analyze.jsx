import { useState } from "react";
import { analyzeSkills } from "../services/gemini";

function Analyze() {
  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const [loading, setLoading] = useState(false);

  const [careerScore, setCareerScore] = useState("--");
  const [jobMatch, setJobMatch] = useState("--");
  const [salary, setSalary] = useState("--");
  const [result, setResult] = useState("");

  const handleAnalyze = async () => {
    if (!career || !skills || !experience) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await analyzeSkills(
        career,
        skills,
        experience
      );

      setResult(response);

      const careerMatch = response.match(/Career Readiness Score:\s*(\d+)/i);
      setCareerScore(careerMatch ? careerMatch[1] + "%" : "--");

      const jobMatchResult = response.match(/Job Match Probability:\s*(\d+)/i);
      setJobMatch(jobMatchResult ? jobMatchResult[1] + "%" : "--");

      const salaryMatch = response.match(/Estimated Salary:\s*(.*)/i);
      setSalary(salaryMatch ? salaryMatch[1] : "--");

    } catch (error) {
      console.error(error);
      alert("Gemini API Error");
    }

    setLoading(false);
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>

        {/* TITLE */}
        <h1 style={titleStyle}>🚀 SkillForge AI</h1>

        {/* INPUTS */}
        <label style={labelStyle}>Career Goal</label>
        <input
          type="text"
          value={career}
          onChange={(e) => setCareer(e.target.value)}
          placeholder="Frontend Developer"
          style={inputStyle}
        />

        <label style={labelStyle}>Current Skills</label>
        <textarea
          rows={5}
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="HTML, CSS, JavaScript, React"
          style={textareaStyle}
        />

        <label style={labelStyle}>Experience</label>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={inputStyle}
        >
          <option value="">Choose Experience</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <button
          onClick={handleAnalyze}
          style={buttonStyle}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze with AI"}
        </button>

        {/* SCORE SECTION */}
        <div style={scoreContainer}>

          <div style={scoreCard}>
            <h3 style={scoreTitleStyle}>Career Readiness</h3>
            <h2 style={scoreValueStyle}>{careerScore}</h2>
          </div>

          <div style={scoreCard}>
            <h3 style={scoreTitleStyle}>Job Match</h3>
            <h2 style={scoreValueStyle}>{jobMatch}</h2>
          </div>

          <div style={scoreCard}>
            <h3 style={scoreTitleStyle}>Estimated Salary</h3>
            <h2 style={scoreValueStyle}>{salary}</h2>
          </div>

        </div>

        {/* AI RESPONSE */}
        {result && (
          <div style={aiBoxStyle}>

            <h2 style={aiHeadingStyle}>AI Career Analysis</h2>

            <div style={aiTextStyle}>
              {result}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

/* ===========================
   STYLES
=========================== */

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#0f172a,#312e81,#7e22ce)",
  padding: "40px",
};

const cardStyle = {
  width: "900px",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px)",
  borderRadius: "25px",
  padding: "40px",
  color: "#fff",
  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "35px",
  fontSize: "40px",
  fontWeight: "bold",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  marginTop: "20px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  marginBottom: "10px",
  fontSize: "16px",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "25px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  background: "#06b6d4",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "18px",
};

/* SCORE STYLES */

const scoreContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  marginTop: "35px",
};

const scoreCard = {
  background: "rgba(255,255,255,0.10)",
  borderRadius: "15px",
  padding: "25px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.1)",
};

const scoreTitleStyle = {
  color: "#00d4ff",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "10px",
};

const scoreValueStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#ffffff",
};

/* AI BOX */

const aiBoxStyle = {
  marginTop: "35px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "15px",
  padding: "25px",
};

const aiHeadingStyle = {
  color: "#ffcc00",
  fontSize: "20px",
  marginBottom: "15px",
  fontWeight: "bold",
};

const aiTextStyle = {
  color: "white",
  fontSize: "15px",
  lineHeight: "1.8",
  whiteSpace: "pre-line",
};

export default Analyze;