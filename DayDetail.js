import React, { useState } from "react";

function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-2xl p-6 mb-6 shadow-lg bg-white transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left text-xl font-semibold text-blue-900 hover:text-blue-600"
      >
        <span>{title}</span>
        <span className="text-2xl font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="mt-4 text-gray-800 space-y-4">{children}</div>}
    </div>
  );
}

function DayContent({ title, intro, sections }) {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">{title}</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">{intro}</p>
      {sections.map((section, index) => (
        <CollapsibleSection key={index} title={section.title}>
          {section.content}
        </CollapsibleSection>
      ))}
    </div>
  );
}

const days = [
  {
    title: "Day 1: Introduction to Hospitality",
    intro:
      "Welcome to the hospitality industry! Today’s session introduces foundational concepts crucial to delivering world-class guest experiences.",
    sections: [
      {
        title: "Overview of the Hospitality Industry",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Definition and Scope:</strong> The hospitality industry encompasses services such as accommodation, food and beverage, travel, entertainment, and tourism. This customer-centric field is rooted in creating positive, memorable experiences for guests.
            </li>
            <li>
              <strong>Key Segments:</strong> Accommodation (hotels, resorts), Food & Beverage (restaurants, catering), Travel & Tourism (airlines, tours), and Entertainment & Recreation (theme parks, spas).
            </li>
            <li>
              <strong>Economic Impact:</strong> The industry significantly contributes to local and global economies, offering employment opportunities and driving tourism.
            </li>
            <li>
              <strong>Trends:</strong> Technology integration, sustainability initiatives, and personalized services are reshaping modern hospitality.
            </li>
          </ul>
        ),
      },
      {
        title: "The Role of Hotels and Restaurants",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Hotels:</strong> Provide a wide range of lodging experiences from budget-friendly to luxury. Services include housekeeping, concierge, and facilities like pools or spas. Revenue is generated through bookings, events, and additional services.
            </li>
            <li>
              <strong>Restaurants:</strong> Offer tailored dining experiences, focusing on food quality, ambiance, service speed, and staff attentiveness. Operations involve menu development, compliance with safety standards, and delivering consistent service.
            </li>
            <li>
              <strong>Integration:</strong> Many hotels collaborate with restaurants to provide seamless guest services such as in-room dining or event catering.
            </li>
          </ul>
        ),
      },
      {
        title: "Key Skills Required for Success",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Customer Service:</strong> Exceptional interpersonal communication, problem resolution, and an empathetic approach ensure guests feel welcomed and valued.
            </li>
            <li>
              <strong>Attention to Detail:</strong> Precision in everything from room setup to meal presentation significantly influences guest satisfaction.
            </li>
            <li>
              <strong>Teamwork and Adaptability:</strong> Collaboration between departments and flexibility in handling changing demands are critical in this fast-paced industry.
            </li>
            <li>
              <strong>Cultural Sensitivity and Standards Compliance:</strong> Understanding diverse guest needs and adhering to hygiene, safety, and privacy protocols uphold the integrity of service.
            </li>
          </ul>
        ),
      },
    ],
  },
  ...Array.from({ length: 13 }, (_, i) => {
    const day = i + 2;
    return {
      title: `Day ${day}: Interactive Topic ${day}`,
      intro: `This module expands on Day ${day} with applied techniques and professional standards across real scenarios in hospitality.`,
      sections: [
        {
          title: `Professional Best Practices`,
          content: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Deep dive into the most effective practices and behaviors for guest interaction.</li>
              <li>Explore role-play and interactive responses for key frontline scenarios.</li>
              <li>Reflections on positive guest feedback loops and review strategies.</li>
            </ul>
          ),
        },
        {
          title: `Operational and Team Excellence`,
          content: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordination across teams for seamless service experiences.</li>
              <li>Use of digital systems and tracking to enhance service delivery.</li>
              <li>Examples of successful collaboration across departments.</li>
            </ul>
          ),
        },
        {
          title: `Reflective and Critical Skills`,
          content: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Adapting to guest feedback and using it to shape your service mindset.</li>
              <li>Applying leadership, emotional intelligence, and initiative in daily tasks.</li>
              <li>Situational thinking and rapid response strategies in unexpected situations.</li>
            </ul>
          ),
        },
      ],
    };
  })
];

export default function DayDetail({ day }) {
  const selectedDay = days[day - 1];
  if (!selectedDay) return null;
  return <DayContent {...selectedDay} />;
}
