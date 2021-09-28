import React from "react";
import "./Inputs.css";

function Inputs(props) {
  // const [numPage2, setNumPage2] = useState(props.numPage);
  // const [NumLanguages2, setNumLanguages2] = useState(props.numLanguages);

  const incrementPage = () => {
    
    props.setNumPage((prev) => Number(prev)+ 1);
    //(prev) => prev < 22 ? prev+ 1 : prev)
  }
  const decrementPage = () => {
    props.setNumPage((prev) => Number(prev)- 1 )
    //(prev) => prev >1 ? prev- 1 : prev
  }

  const incrementLan = () => {
    props.setNumLanguages((pre) => (pre < 5 ? pre + 1 : pre));
   
  }
  const decrementLan = () => {
    props.setNumLanguages((pre) => (pre > 0 ? pre - 1 : pre));
  }
  
  const tryHan1 = (e) =>{
    props.setNumPage(e.target.value);
      const re = /^[0-9\b+$]/;
    if (re.test(e.target.value)) {
     props.setNumPage(e.target.value);
//     } else{
//        props.setNumPage(1);
// console.log("i am good..");
     }
    
  }

  return (
    <div>
      <label className="pagesLine">
        <p> How many pages:</p>
        <button type="button" onClick={incrementPage}>
          ➕
        </button>
        <input type="text" value={props.numPage} maxLength="2" onChange={tryHan1} />
        <button type="button" onClick={decrementPage}>
          ➖
        </button>
      </label>

      <label className="pagesLine">
        <p> How many languages:</p>
        <button type="button" onClick={incrementLan}>
          ➕
        </button>
        <input type="text" value={props.numLanguages} readOnly/>
        <button type="button" onClick={decrementLan}>
          ➖
        </button>
      </label>
    </div>
  );
}
export default Inputs
