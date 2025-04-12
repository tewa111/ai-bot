import React, { useState } from 'react';
<div style={{backgroundColor: "#fff8f0" }}></div>
const ExamPage = () => {
  const questions = [
    { question: 'What is the primary purpose of a hospitality business?', options: ['Customer service', 'Profit', 'Marketing', 'All of the above'], answer: 0 },
    { question: 'What is the first step in guest service?', options: ['Greeting', 'Offering a service', 'Asking for feedback', 'Selling products'], answer: 0 },
    { question: 'What is a key factor in creating a great guest experience?', options: ['Customer service', 'Marketing', 'Location', 'Price'], answer: 0 },
    { question: 'What should you do when a guest complains?', options: ['Ignore them', 'Apologize and resolve the issue', 'Escalate to your manager immediately', 'Tell them they are wrong'], answer: 1 },
    { question: 'What is the role of a concierge in a hotel?', options: ['Cleaning rooms', 'Booking services for guests', 'Cooking food', 'Checking in guests'], answer: 1 },
    { question: 'What does "up-selling" mean in hospitality?', options: ['Offering guests additional services or products', 'Upsetting the guest', 'Refusing a guest request', 'Denying a guest discount'], answer: 0 },
    { question: 'Which of these is NOT a common type of hotel room?', options: ['Suite', 'Deluxe room', 'Double bed', 'Swimming pool room'], answer: 3 },
    { question: 'Which of the following is important for a good check-in process?', options: ['Speed', 'Personalized service', 'Long wait times', 'Ignoring the guest\'s preferences'], answer: 1 },
    { question: 'What does "check-out" refer to in a hotel?', options: ['The process of booking a room', 'The process of checking in guests', 'The process of leaving and settling the bill', 'The process of cleaning the room'], answer: 2 },
    { question: 'How should you handle a situation where a guest is dissatisfied with the food?', options: ['Argue with them', 'Offer a solution', 'Ignore their complaint', 'Ask for a review'], answer: 1 },
    { question: 'What is the most important factor in hotel cleanliness?', options: ['Quality of cleaning products', 'Staff efficiency', 'Guest satisfaction', 'Regular cleaning schedules'], answer: 1 },
  { question: 'Which of the following is a key element of hotel security?', options: ['Surveillance cameras', 'Employee uniforms', 'Guest entertainment', 'Hotel ratings'], answer: 0 },
  { question: 'How can hotels improve guest satisfaction?', options: ['Provide a comfortable bed', 'Serve food 24/7', 'Offer personalized experiences', 'All of the above'], answer: 3 },
  { question: 'What does the term "turn-down service" refer to?', options: ['Room cleaning', 'Room preparation for sleep', 'Making the bed', 'Providing extra amenities'], answer: 1 },
  { question: 'What is the main responsibility of the hotel front desk?', options: ['Cleaning rooms', 'Managing guest reservations', 'Serving food', 'Providing security'], answer: 1 },
  { question: 'What is a key feature of luxury hotels?', options: ['Affordable pricing', 'Personalized service', 'Limited amenities', 'Self-check-in kiosks'], answer: 1 },
  { question: 'Which department is responsible for maintaining hotel facilities?', options: ['Housekeeping', 'Maintenance', 'Front desk', 'Guest services'], answer: 1 },
  { question: 'Which of these services is often provided by a hotel concierge?', options: ['Room cleaning', 'Dinner reservations', 'Transport booking', 'Both b and c'], answer: 3 },
  { question: 'What should a hotel receptionist do when checking in a guest?', options: ['Ask for the guest’s preferences', 'Offer additional services', 'Provide room key', 'All of the above'], answer: 3 },
  { question: 'How should employees handle a VIP guest?', options: ['Offer personalized attention', 'Ignore special requests', 'Offer discounts', 'Ask for tips'], answer: 0 },
  { question: 'What does "full board" mean in hotel terms?', options: ['No meals included', 'Breakfast included', 'Breakfast, lunch, and dinner included', 'Room-only service'], answer: 2 },
  { question: 'What is the primary role of a hotel manager?', options: ['Serve food', 'Oversee daily operations', 'Clean rooms', 'Ensure guest satisfaction'], answer: 1 },
  { question: 'Which of these is a common hotel amenity?', options: ['Free Wi-Fi', 'Complimentary breakfast', 'Fitness center', 'All of the above'], answer: 3 },
  { question: 'How should a hotel employee respond to a guest request?', options: ['Ignore them', 'Provide assistance or escalate if necessary', 'Tell them to wait', 'Ask for additional payment'], answer: 1 },
  { question: 'What is a common feature in modern hotel rooms?', options: ['Smart TVs', 'Irons', 'Hairdryers', 'All of the above'], answer: 3 },
  { question: 'What should be done if a hotel guest is unhappy with their room?', options: ['Ignore the issue', 'Provide a solution or alternative room', 'Tell them it is the best we can offer', 'Charge them more'], answer: 1 },
  { question: 'What does "room service" mean?', options: ['Room cleaning', 'Meals delivered to the room', 'Guest check-in', 'Room entertainment'], answer: 1 },
  { question: 'What is the typical check-in time for most hotels?', options: ['10 AM', '12 PM', '3 PM', '5 PM'], answer: 2 },
  { question: 'What is "peak season" in hospitality?', options: ['Low occupancy season', 'Time with the most bookings and demand', 'Holiday period with fewer visitors', 'Off-peak times with discount rates'], answer: 1 },
  { question: 'What is the most common method of payment for hotel stays?', options: ['Cash', 'Credit card', 'Debit card', 'Prepaid voucher'], answer: 1 },
  { question: 'What is "late check-out"?', options: ['Leaving the hotel early', 'Extending check-out beyond the usual time', 'Arriving late at check-in', 'Cleaning rooms late'], answer: 1 },
  { question: 'Which department handles guest laundry requests?', options: ['Housekeeping', 'Concierge', 'Front desk', 'Maintenance'], answer: 0 },
  { question: 'How do hotels often encourage repeat guests?', options: ['Offering discounts and rewards programs', 'Overcharging', 'Ignoring guest preferences', 'Providing limited services'], answer: 0 },
  { question: 'What is an important part of a hotel’s marketing strategy?', options: ['Discount pricing', 'Social media presence', 'Loyalty programs', 'All of the above'], answer: 3 },
  { question: 'What does "all-inclusive" mean in hospitality?', options: ['Meals and drinks are included', 'Only breakfast is included', 'Room only service', 'No meals included'], answer: 0 },
  { question: 'What is the role of a hotel bellhop?', options: ['Assist with luggage', 'Check in guests', 'Clean rooms', 'Provide room service'], answer: 0 },
  { question: 'What is the main goal of guest feedback?', options: ['To complain about the service', 'To improve future guest experiences', 'To create negative reviews', 'To offer discounts'], answer: 1 },
  { question: 'How should a hotel staff handle a situation where a guest is drunk?', options: ['Ignore the guest', 'Call security or offer assistance', 'Tell them to leave', 'Call the police immediately'], answer: 1 },
  { question: 'Which of the following is a potential challenge for the hospitality industry?', options: ['Seasonality and fluctuating demand', 'High guest satisfaction', 'Stability in pricing', 'Limited competition'], answer: 0 },
  { question: 'What is the importance of maintaining good relationships with suppliers in a hotel?', options: ['Ensures timely delivery of products and services', 'Helps maintain guest satisfaction', 'Reduces operational costs', 'All of the above'], answer: 3 },
  { question: 'Which type of hotel is typically considered budget-friendly?', options: ['Luxury hotels', 'Boutique hotels', 'Hostels', 'Resorts'], answer: 2 },
  { question: 'What is a "group booking" in hospitality?', options: ['A single reservation for a family', 'A booking for multiple rooms or guests', 'A reservation for a special event', 'A long-term stay booking'], answer: 1 },
  { question: 'What is one key characteristic of eco-friendly hotels?', options: ['Low-cost rooms', 'Sustainable and energy-efficient practices', 'Luxurious service', '24-hour room service'], answer: 1 },
  { question: 'What is the "concierge desk" primarily used for?', options: ['Room bookings', 'Guest requests and special services', 'Security services', 'Hotel maintenance'], answer: 1 },
  { question: 'Which of these can improve a hotel’s online reputation?', options: ['Consistent quality of service', 'Negative reviews', 'Ignoring guest feedback', 'High prices'], answer: 0 },
  { question: 'What is the first impression a guest usually has of a hotel?', options: ['The hotel lobby', 'The guest room', 'The restaurant', 'The front desk'], answer: 0 },
  { question: 'What should a hotel do when offering discounts or promotions?', options: ['Advertise them broadly', 'Limit availability', 'Offer discounts only to select guests', 'None of the above'], answer: 0 },
  { question: 'Which of these practices is important for staff training in hospitality?', options: ['Clear communication skills', 'Ignoring customer needs', 'Long working hours', 'Minimal interaction with guests'], answer: 0 },
  { question: 'What does the term "guest loyalty" refer to?', options: ['A guest’s repeated visits to the hotel', 'Guests following hotel social media', 'Guests leaving a review', 'None of the above'], answer: 0 }

  ];

  const [answers, setAnswers] = useState(Array(58).fill(null)); // Store answers of 50 questions
  const [submitted, setSubmitted] = useState(false);
  const [grade, setGrade] = useState(null);

  const handleChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(e.target.value);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });
    setGrade(score);
    setSubmitted(true);
  };

  return (
    <div>
      <form>
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{q.question}</p>
            <div>
              {q.options.map((option, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    id={`q${index}-opt${i}`}
                    name={`q${index}`}
                    value={i}
                    checked={answers[index] === i}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <label htmlFor={`q${index}-opt${i}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {submitted && (
        <div className="result">
          <h2>Your Score: {grade} / 50</h2>
        </div>
      )}
    </div>
  );
};

export default ExamPage;
