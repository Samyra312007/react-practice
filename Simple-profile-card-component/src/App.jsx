import Card from "./components/card.jsx"

function App() {

  return (
    <>
      <div className="app">
        <h1>My Profile</h1>
        <Card
          name="Sahil Kumar"
          photo="https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc"
          description="Loves AI, Coding, and exploring new things."
        />
      </div>
    </>
  );
}

export default App
