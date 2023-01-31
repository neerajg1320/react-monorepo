import './App.css';
import {Button} from "@glassball/gallery";
import {Text} from "@glassball/gallery";

function App() {
  return (
    <div className="App">
      <h1>App using gallery</h1>
      <div>
        <Button>Button</Button>
        <Text variant="Hero">Hero Text</Text>
      </div>
    </div>
  );
}

export default App;
