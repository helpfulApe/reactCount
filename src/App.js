import React, { useState } from 'react';

// hooks MÜSSEN in reihenfolge gelesen werden und drüfen demnach NICHT innerhalb
// einer function , loop, if statement oder genestet werden

// useState
// if (true) {
//   useState    // <-- Funktioniert nicht da hook in if
// }
// useState  <-- Funktioniert nicht da hook kette unterbrochen ist
//  -----------------------------------------------

// useState
// function(){            // <-- Funktioniert da hook nicht in function
//   console.log(object) 
// }
// useState   // <-- Funktioniert da hook kette nicht unterbrochen ist
// useState


// function stateOfCount() {
//   console.log('this is the new state of count ')
//   return 4
// }


function App() { 
  const [count, setCount] = useState(0) // <- normale schreibweise 
  // count wird mit setState ein wert zugewiesen, welcher zu dem Zeitpunkt sein Ist zusatand ist.
  // count kann über setCount geändert und neu gerendert werden.

  // const [count, setCount] = useState(() => {
  //   console.log('Wird NUR einmal zum start ausgeführt, nur für komplexe bedingungen')
  //   return 4
  // }) <-- nur in "extremfällen verwenden"

  // const [count, setCount] = useState(stateOfCount()) // 4() = 5() // <-- man kann dem state auch eine fuction übergeben.
  // diese fucktion wird bei jedem ändern des states neu ausgefhrt


  // count = useState()
  // setCount = ändert count


  // hook wird mit const[variable, varFunction] definiert. 
  // mit useState wird der variablen ein anfangs wert zugewiesn


  // function decrementCount() {
  //   setCount(count - 1)
  //   // count = 4
  //   setCount(count - 1)
  // } // count = 3
  // function incCount() {
  //   setCount(count + 1)
  //   setCount(count + 1) <--- setCount wird in diesem beispiel nur 1 mal ausgeführt, da count INNERHALB den FUNKTIONSKÖRPERS nicht aktualisiert wird.
  // }

  // state hook wit parameter
  function decrementCount() {  // um mehrere anweisungen in einer fuction zu haben braucht man {}
    setCount(prevCount => {
      console.log(prevCount + "-1")
      return prevCount - 2 // man muss den wert, mitdem man weiter arbeiten möchte mit return übermitteln
    })
  } // wenn die function executed wird ein neuer wert gerendert
  function incCount() {
    setCount(prevCount => {
      console.log(count)
      console.log(prevCount + " + 1 ")
      return prevCount + 4
    })
  }


  return (
    <>
      <button onClick={incCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
    </>
  );
}

export default App;

