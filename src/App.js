import './App.css';
import Title from './components/title';
import Count from './components/count';
import { useCallback, useMemo, useState } from 'react';
function App() {

  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(60000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  {/* Use memo is used to moemorize the value thats returned a function
      When the component is re-rendered  when clicking the salary, isAgeEven function also getting re-rendered unnecessarily
      To avoid this, we can use useMemo() and provide a dependency */}
  const isAgeEven = useMemo(() => {
    console.log('hello')
    let i = 0;
    while (i < 2000000000) i++;
    return age % 2 === 0;
  }, [age]);

  return (
    <div className="App">
      {/* Title is a non-changing component. 
          SO prevent it from rerendering during every renender of this app, 
          use React.memo in title component */}
      <Title />
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={incrementSalary}>Increment Salary</button>
      {/*   When only age is incremented, salary should not be re-rendered (its using the same component) 
            So use useCallback and provide the dependency, also wrap the Count component using HOC memo 
            This helps improve the optimization */}
      <Count text='age' status={age} />
      <Count text='salary' status={salary} />
      <span>{isAgeEven ? 'Even' : 'Odd'}</span>

    </div>
  );
}

export default App;
