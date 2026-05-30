import React from "react";

const Error = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          borderRadius: "20px",
          backgroundColor: "#1e293b",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          width: "90%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            margin: "0",
            color: "#38bdf8",
          }}
        >
          404
        </h1>

        <h2
          style={{
            marginTop: "10px",
            fontSize: "32px",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            marginTop: "15px",
            fontSize: "16px",
            color: "#cbd5e1",
            lineHeight: "1.6",
          }}
        >
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <button
          onClick={() => window.history.back()}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#0ea5e9")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#38bdf8")
          }
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;