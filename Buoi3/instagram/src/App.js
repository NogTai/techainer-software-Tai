import Header from './components/Header.js';
import Body from './components/Body.js'
import Slidebar from './components/Slidebar.js';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Body />
        <Slidebar />
      </section>
    </div>
  );
}

export default App;
