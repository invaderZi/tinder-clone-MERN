import './App.css';
import Card from './Card';
import Header from './Header';
import SwipeButtons from './SwipeButtons';



function App() {
  return (
    <div className="App">

     {/*Header*/}
     <Header/>
     {/*Photo*/}
     <Card/>
     {/*buttons*/}
     <SwipeButtons/>

    </div>
  );
}

export default App;
