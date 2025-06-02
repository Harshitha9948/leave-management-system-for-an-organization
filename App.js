import React, { useState } from 'react'; 
import './App.css'; 
 
function App() { 
    // Initial leave balance 
    const [leaveBalance, setLeaveBalance] = useState({ 
        Casual: 5, 
        Medical: 3, 
        Earned: 7 
    }); 
 
    // State to store the selected leave type     
    const [selectedLeave, setSelectedLeave] = useState('Casual');     
    const [message, setMessage] = useState(''); 
 
    // Function to apply for leave    
     const applyLeave = () => {         
      if (leaveBalance[selectedLeave] > 0) {             
        setLeaveBalance({ ...leaveBalance, [selectedLeave]: leaveBalance[selectedLeave] 
- 1 }); 
            setMessage(`Leave approved! Remaining ${selectedLeave} Leaves: ${leaveBalance[selectedLeave] - 1}`); 
        } else { 
            setMessage(`No ${selectedLeave} Leaves left!`); 
        } 
    }; 
 
    return ( 
        <div className="leave-management"> 
            <h2>Leave Management System</h2> 
 
            <h3>Available Leaves:</h3> 
            <ul> 
                {Object.keys(leaveBalance).map((type) => ( 
                    <li key={type}>{type}: {leaveBalance[type]}</li> 
                ))} 
            </ul> 
 
            <h3>Apply for Leave:</h3> 
            <select onChange={(e) => setSelectedLeave(e.target.value)}> 
                {Object.keys(leaveBalance).map((type) => ( 
                    <option key={type} value={type}>{type} Leave</option> 
                ))} 
            </select> 
            <button onClick={applyLeave}>Apply</button> 
 
            {message && <p className="message">{message}</p>} 
        </div> 
    ); 
} 
 
export default App; 
