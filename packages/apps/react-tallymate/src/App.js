import './App.css';
import {Button} from "@glassball/gallery";
import {Text} from "@glassball/gallery";
import {TableWrapper} from "@glassball/table";

function App() {
  return (
    <div className="App">
      <h1>App using gallery</h1>
      <div>
        <Button>Button</Button>
        <Text variant="Hero">Hero Text</Text>
        <TableWrapper />
      </div>
    </div>
  );
}

export default App;
