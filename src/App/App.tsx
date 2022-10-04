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

  function addBug(){

  }

  function deleteBug(){

  }



  return (
    <div className="App">
      <h1>Bug Tracker</h1>


      <form onSubmit={addBug}>
        {/*Bug description */}
        <label htmlFor="newBugDescription">
          New bug description: 
        </label>
        <input type="text" id="newBugDescription" value={newBugDescription} onChange={event=> setNewBugDescription(event.target.value)}/>
      
        {/* Bug Priority */}
        <select id="newBugPriority" value={newBugPriority} onChange={event=> setNewBugPriority(event.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {/* Submit Button */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
