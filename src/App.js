import Navbar from "./Components/Navbar/Navbar";
import QuestionOne from "./Components/QuestionOne/Index";
import QuestionTwo from "./Components/QuestionTwo/Index";
import QuestionThree from "./Components/QuestionThree/Index";
import QuestionFour from "./Components/QuestionFour/Index";
import QuestionFive from "./Components/QuestionFive/Index";
import QuestionSix from "./Components/QuestionSix/Index";
import "./index.css";
import { useState } from "react";
function App() {
  const [activePage, setActivePage] = useState(1);

  const handleChangePage = (e) => {
    const { id } = e.target;

    setActivePage(Number(id));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Navbar changePage={handleChangePage} />
      </nav>
      <section className="contents">
        {activePage === 1 && <QuestionOne />}
        {activePage === 2 && <QuestionTwo />}
        {activePage === 3 && <QuestionThree />}
        {activePage === 4 && <QuestionFour />}
        {activePage === 5 && <QuestionFive />}
        {activePage === 6 && <QuestionSix />}
      </section>
    </div>
  );
}

export default App;
