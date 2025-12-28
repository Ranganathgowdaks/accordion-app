import Accordion from "./Accordion";

function App() {
  const accordionData = [
    {
      title: "Why use React for UI development?",
      content:
        "React enables efficient UI rendering through its virtual DOM and component-based architecture.",
    },
    {
      title: "What makes Vite different from Webpack?",
      content:
        "Vite uses native ES modules for instant server start and faster hot reload.",
    },
    {
      title: "Is this accordion production ready?",
      content:
        "Yes. It includes smooth animations, accessibility attributes, and scalable structure.",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Accordion Example</h2>
      <Accordion items={accordionData} />
    </div>
  );
}

export default App;
