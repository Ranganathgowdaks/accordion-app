import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button
              className="accordion-header"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="chevron">⌄</span>
            </button>

            <div
              className="accordion-panel"
              style={{
                maxHeight: isOpen ? "200px" : "0px",
              }}
            >
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
