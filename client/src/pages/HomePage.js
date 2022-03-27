import CounterApp from "../components/CounterApp";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <div className="app-wrapper">
        <CounterApp />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
