import React from "react";

const Home = () => {
  return (
    <div
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to bottom right, #f8f4f1, #ffffff)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.6rem",
          color: "#8e5722",
          fontWeight: 700,
          marginBottom: "1.5rem",
        }}
      >
        Welcome to the Kuriftu Hospitality Training Hub
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.75",
          color: "#5a4a3a",
        }}
      >
        We are honored to welcome you to <strong>Kuriftu Resort</strong>, a distinguished member of the hospitality world. 
        As part of our five-star establishment, your growth and contributions will shape the exceptional experiences we provide. 🌿
        <br />
        <br />
        Over the next two weeks, this immersive training will introduce you to the principles of luxury service, operational 
        excellence, safety standards, and guest satisfaction.
        <br />
        <br />
        Your journey will culminate in a final evaluation to celebrate your development and mark your transition into a permanent 
        member of the Kuriftu family.
      </p>

      <img
        src="https://www.ethiosports.com/wp-content/uploads/2019/08/Kuriftu-Water-park.jpg"
        alt="Kuriftu Resort"
        style={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "20px",
          marginTop: "2.5rem",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <div
        style={{
          marginTop: "3rem",
          padding: "2.5rem",
          background: "#f3e8db",
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#8b3d21",
          }}
        >
          🧭 Your Journey Starts Here
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            fontSize: "1.1rem",
            color: "#6a4e3c",
          }}
        >
          Embrace the learning, ask questions, and participate fully. We are here to support you every step of the way.
        </p>
        <button
          style={{
            backgroundColor: "#8b3d21",
            color: "#fff",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#732f19";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#8b3d21";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Begin Training
        </button>
      </div>

      <img
        src="https://kurifturesorts.com/images/kf-spa.jpg"
        alt="Kuriftu Spa"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "18px",
          marginTop: "3rem",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
        }}
      />
    </div>
  );
};

export default Home;
