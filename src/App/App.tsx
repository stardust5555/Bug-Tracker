import './App.css';
import { useState } from 'react';

import {IBug} from "./IBug"

function App() {
  //|| STATES
  //Adding a description for a bug
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  //Adding the "priority" for a bug (defaults to medium priority)
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  //State holds the list of bugs
  const [bugList, setBugList] = useState<IBug[]>([]); 
  return (
    <div className="App">
      <h1>Bug Tracker</h1>
    </div>
  );
}

export default App;
