const couterValue = document.querySelector('#value')
‎
function App() {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if(counter<=0) {
    decrement = () => setCounter(1);
  }

  return (
    <div> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  );
}
‎