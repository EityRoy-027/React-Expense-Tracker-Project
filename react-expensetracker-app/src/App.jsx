import { useState } from "react"


function App() {

  const [expense,setExpense] = useState(0);
   const [notes,setNotes] = useState([]);
   const [name, setName] = useState('');
   const [amount, setAmount] = useState(0);

   function addButton(){
   let str= name+"-" + amount;
setNotes([...notes, str])
   
   setExpense(parseInt(amount)+expense);
   }

   function delButton(index){
    let updatenotes = notes.filter((_,i) => i!==index);
    setNotes(updatenotes);
   }

  return (
    <>
    
<div className="h-screen flex justify-center items-center">

<div className="w-[500px] h-[700px] bg-gray-400 rounded-xl flex flex-col justify-around items-center">

<div className="font-bold text-3xl text-blue-900 mt-4">Expense Tracker</div>
<div className="font-bold text-2xl w-[300px] h-[120px] bg-blue-200 rounded-xl text-center flex justify-center items-center text-fuchsia-600 border-fuchsia-400 border-2">Total:{expense}</div>

<div className="w-[450px] flex justify-center items-center gap-5">
  <input onChange={(e) =>setName(e.target.value)} className="w-[260px] h-[60px] rounded-md border-2 border pl-2 font-bold border-blue-800 text-blue-600" placeholder="Expense Name" type="text" />
  <input onChange={(e) =>setAmount(e.target.value)} className="w-[260px] h-[60px] rounded-md border-2 pl-2 font-bold border-blue-800 text-blue-600" placeholder="Amount" type="text" />
</div>

<div>
  <button onClick={addButton} className="h-[60px] w-[110px] bg-blue-600 rounded-md text-white">Add Expense</button>
</div>

<div className="w-[450px] h-[250px] bg-gray-500 rounded-xl text-xl border-2 border-blue-400 flex flex-col items-center gap-4 p-10">
  
 {
  notes.map((n,index) =>(
    
    <li className="w-full flex justify-between items-center"
      key={index}>
      
      {n}
      <button onClick={() =>delButton(index)} className=" w-[70px] h-[40px] bg-red-600 rounded-md text-sm text-white font-bold">
        Delete
      </button>
    </li>
  
  )
  )
 }

</div>

  </div>

    </div>
         
         
             

    </>
  )
}

export default App
