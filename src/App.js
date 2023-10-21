import './App.css';
import ColourPick from './components/ColourPick';


const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

function App() {
  return (
    <div className="App">
      <ColourPick colors={colors} />
    </div>
  );
}

export default App;
