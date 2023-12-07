import {useSelector, useDispatch} from 'react-redux'
import {inc, dec, rnd} from "../actions";


const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return(
        <div>
            <h1 id="counter">{counter}</h1>
            <button onClick={()=> dispatch(dec())}>dec</button>
            <button onClick={()=> dispatch(inc())}>inc</button>
            <button onClick={()=> dispatch(rnd())}>rnd</button>
        </div>
    )
}

const mapStateProps = (state) =>{
    return{
        counter: state.counter,
    }
}

export default Counter;