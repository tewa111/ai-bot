import React from "react";

// Training data for the 2-week program
const trainingData = [
  { day: "Day 1", topic: "Introduction to Hospitality Industry", content: "Overview of hotels and restaurants, industry standards, and guest expectations." },
  { day: "Day 2", topic: "Customer Service Basics", content: "Greeting guests, handling inquiries, and practicing active listening." },
  { day: "Day 3", topic: "Front Desk Operations", content: "Check-in/out procedures, handling reservations, and phone etiquette." },
  { day: "Day 4", topic: "Housekeeping Standards", content: "Room cleaning protocols, health & safety, and lost & found procedures." },
  { day: "Day 5", topic: "Restaurant Service Basics", content: "Table settings, taking orders, and guest interaction." },
  { day: "Day 6", topic: "Food Safety and Hygiene", content: "Safe food handling, personal hygiene, and kitchen cleanliness." },
  { day: "Day 7", topic: "Conflict Resolution", content: "Handling guest complaints and de-escalation techniques." },
  { day: "Day 8", topic: "Teamwork and Communication", content: "Collaborating across departments and effective communication." },
  { day: "Day 9", topic: "Upselling and Guest Satisfaction", content: "Encouraging upgrades, loyalty programs, and surveys." },
  { day: "Day 10", topic: "Restaurant Operations", content: "POS systems, handling payments, and reservations." },
  { day: "Day 11", topic: "Hotel Services Overview", content: "Concierge, room service, spa and gym facilities." },
  { day: "Day 12", topic: "Cultural Awareness", content: "Respecting guest diversity and cultural norms." },
  { day: "Day 13", topic: "Emergency Procedures", content: "Fire safety, evacuation plans, and first aid." },
  { day: "Day 14", topic: "Final Review and Quiz", content: "Summary of key topics and final assessment." },
];

// TrainingCard component for each day's topic and content
const TrainingCard = ({ day, topic, content }) => (
  <div
    style={{
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    }}
  >
    <h3
      style={{
        fontSize: "1.5rem",
        color: "#2c3e50",
        marginBottom: "0.8rem",
        fontWeight: "600",
      }}
    >
      {day}: {topic}
    </h3>
    <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
      {content}
    </p>
  </div>
);

// Main TrainingProgram component
function TrainingProgram() {
  return (
    <div
      style={{
        padding: "3rem 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        backgroundColor: "#f9f9f9",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: "3rem",
          fontWeight: "700",
        }}
      >
        2-Week Hospitality Training Program
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {trainingData.map((day, index) => (
          <TrainingCard
            key={index}
            day={day.day}
            topic={day.topic}
            content={day.content}
          />
        ))}
      </div>
    </div>
  );
}

export default TrainingProgram;
