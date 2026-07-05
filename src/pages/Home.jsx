import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#4f46e5,#7c3aed,#ec4899)",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 60px",
          alignItems: "center",
        }}
      >
        <h2>SkillForge AI</h2>

        <div>
          <Link
            to="/login"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            to="/signup"
            style={{
              background: "white",
              color: "#4f46e5",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "20px",
            }}
          >
            Discover Your Career Path with AI
          </h1>

          <p
            style={{
              fontSize: "22px",
              maxWidth: "700px",
              margin: "auto",
              opacity: ".9",
            }}
          >
            Analyze your current skills, discover missing technologies,
            receive a personalized learning roadmap, and build your dream
            career using Google's Gemini AI.
          </p>

          <Link
            to="/signup"
            style={{
              display: "inline-block",
              marginTop: "35px",
              background: "white",
              color: "#4f46e5",
              padding: "15px 35px",
              borderRadius: "12px",
              fontSize: "18px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
