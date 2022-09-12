import React from "react";
import { useState } from "react";

export default function Buttons() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState('');
  const [formula,setFormula] = useState('');
  const [evaluated,SetEvaluated] = useState(false);

  
  const isOperator = /[×+-÷]/;
  const endsWithOperator = /[×+-÷]$/;
  const endsWithNegativeSign = /\d[×+-÷]{1}-$/;


  const numberOne = () => {
    setInput(input+"1");
  };
  const numberTwo = () => {
    setInput(input+ "2");
  };
  const numberThree = () => {
    setInput(input+ "3");
  };
  const numberFour = () => {
    setInput(input+ "4");
  };
  const numberFive = () => {
    setInput(input+ "5");
  };
  const numberSix = () => {
    setInput(input+ "6");
  };
  const numberSeven = () => {
    setInput(input+ "7");
  };
  const numberEight = () => {
    setInput(input+ "8");
  };
  const numberNine = () => {
    setInput(input+ "9");
  };
  const numberZero = () => {
    setInput(input+"0");
  };

//   const handleDecimal = ()=> {
//     if (evaluated === true) {

//       SetEvaluated(true);

//       this.setState({
//         currentVal: '0.',
//         formula: '0.',
//         evaluated: false
//       });
//     } else if (
//       !this.state.currentVal.includes('.') &&
//       !this.state.currentVal.includes('Limit')
//     ) {
//       this.setState({ evaluated: false });
//       if (this.state.currentVal.length > 21) {
//         this.maxDigitWarning();
//       } else if (
//         endsWithOperator.test(this.state.formula) ||
//         (this.state.currentVal === '0' && this.state.formula === '')
//       ) {
//         this.setState({
//           currentVal: '0.',
//           formula: this.state.formula + '0.'
//         });
//       } else {
//         this.setState({
//           currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
//           formula: this.state.formula + '.'
//         });
//       }
//     }
//   }

  
  const add = () => {
    setInput(input+ "+");
  };

  const subtract = () => {
    setInput(input+ "-");
  };

  const multiply = () => {
    setInput(input+ "×");
  };

  const divide = () => {
    setInput(input+ "÷");
  };



  const handleEvaluate = ()=> {
   // if (!this.state.currentVal.includes('Limit')) {
      let expression = input;
    //   while (endsWithOperator.test(expression)) {
    //     expression = expression.slice(0, -1);
    //   }
      console.log(expression)

      expression = expression
        .replace(/×/g, '*')
        .replace(/-/g, '-')
        .replace(/÷/g, '-')
        .replace('--', '+0+0+0+0+0+0+');
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      setResult(answer.toString());
      setFormula( expression
        .replace(/\*/g, '⋅')
        .replace(/-/g, '‑')
        .replace('+0+0+0+0+0+0+', '‑-')
        .replace(/(x|\/|\+)‑/, '$1-')
        .replace(/^‑/, '-') +
      '=' +
      answer);
      setInput('');      
      SetEvaluated(true);
  }


  return (
    <div style={{fontSize:'20px'}}>
      <div id="display" style={{width:'400px',height:'60px',backgroundColor:'gray'}}>
        <div>display:{input}</div>
        <div>{result}</div>
        </div>
      <button id="clear" onClick={() => {setInput(''); setResult('')}}>AC</button>
      <button id="divide" onClick={() => divide()}>÷</button>
      <button id="multiply" onClick={() => multiply()}>×</button>
      <button id="subtract" onClick={() => subtract()}>-</button>
      <button id="add" onClick={() => add()}>
        +
      </button>
      <button id="equals" onClick={() => handleEvaluate()}>=</button>
      <button id="one" onClick={() => numberOne()}>
        1
      </button>
      <button id="two" onClick={() => numberTwo()}>
        2
      </button>
      <button id="three" onClick={() => numberThree()}>
        3
      </button>
      <button id="four" onClick={() => numberFour()}>
        4
      </button>
      <button id="five" onClick={() => numberFive()}>5</button>
      <button id="six" onClick={() => numberSix()}>6</button>
      <button id="six" onClick={() => numberSeven()}>7</button>
      <button id="eight" onClick={() => numberEight()}>8</button>
      <button id="nine" onClick={() => numberNine()}>9</button>
      <button id="zero" onClick={() => numberZero()}>0</button>

      <button id="decimal" onClick={() => handleDecimal()}>.</button>
    </div>
  );
}
