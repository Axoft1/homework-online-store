import "./App.scss";
import AppRouter from "./component/AppRouter";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
