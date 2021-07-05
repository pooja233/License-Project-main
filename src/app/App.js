import './App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppRoutes from "./Approutes";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  	 <>	
  	  <div className="app-wrapper">
     {
      window.location.pathname!=='/'? <Header/>:null
    }

      <main>
     
  	 <AppRoutes/>
      </main>
      <Footer/>
    </div>
  	 
  	

 
    </>
  );
}

export default App;
