import React from "react";
import "../App.css";

const steps = [
  {
    id: 1,
    title: "Make Appointment",
    description:
      "You must make an appointment in advance, to choose the service and date.",
  },
  {
    id: 2,
    title: "Consultations",
    description:
      "The next stage involves a thorough consultation with an Ayurveda practitioner.",
  },
  {
    id: 3,
    title: "Treatment Planning",
    description:
      " The Ayurvedic practitioner creates a personalized treatment plan for you",
  },
  {
    id: 4,
    title: "Maintenance",
    description:
      "These visits allow for assessment of progress, adjustments to the treatment.",
  },
];

const Approach = () => {
  return (
    <>
      <section className="approach_box">
        <div className="ayu">
          <h1>Our Ayurvedic Approach</h1>
          <p>
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert <br></br>practitioners begin each treatment process by
            conducting a thorough analysis of the <br></br>
            patient’s body type, medical history, and current health conditions.
          </p>
        </div>
        <div className="row_aiyu">
          {steps.map((step) => (
            <div className="box_aiyu" key={step.id}>
              <div className="circle">
                <h2>{step.id}</h2>
              </div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Approach;
