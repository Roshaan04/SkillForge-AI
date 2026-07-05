import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#4f46e5,#7c3aed,#ec4899)",
        padding: "40px",
        color: "white",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h2>SkillForge AI</h2>

        <Link
          to="/"
          style={{
            background: "white",
            color: "#4f46e5",
            padding: "10px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Logout
        </Link>
      </div>

      {/* Welcome */}
      <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>
        Welcome 👋
      </h1>

      <p style={{ fontSize: "20px", opacity: ".9" }}>
        Discover your missing skills and generate a personalized AI roadmap.
      </p>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>Skill Analysis</h2>
          <p>Find your missing technical skills.</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>Learning Roadmap</h2>
          <p>AI creates a personalized learning path.</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>Projects</h2>
          <p>Recommended projects based on your career goal.</p>
        </div>
      </div>

      {/* Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <Link
          to="/analyze"
          style={{
            background: "white",
            color: "#4f46e5",
            padding: "16px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Analyze My Skills
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;