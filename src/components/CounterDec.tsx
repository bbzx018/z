//ounterDec.tsx 

import { useCounterStore } from "../store/CounterStore"; 

const CounterDec = () => { 

    const { count, decrease, reset } = useCounterStore(); 

    return ( 
        <div > 
            <h2 >Counter -</h2> 
            <p >{count}</p> 
            <div > 
                <button onClick={reset}> 
                    Reset 
                </button> 
                <button onClick={decrease}> 
                    Decrease 
                </button> 
            </div> 
        </div> 
    ); 
} 

export default CounterDec; 