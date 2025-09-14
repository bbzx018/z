import './App.css'
// import CounterScore from './components/CounterScore';
// import CounterInc from './components/CounterInc';
// import CounterDec from './components/CounterDec';
import TodoApp from './components/TodoApp';
import CourseApp from './components/CourseApp';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CounterScore />
       <CounterInc />
       <CounterDec /> */}
        <TodoApp />
        <CourseApp />

      </div>
    </>
  )
}

export default App
