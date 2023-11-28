import {connect} from 'react-redux'
import {inc, dec, rnd} from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div>
            <h1 id="counter">{counter}</h1>
            <button onClick={dec}>dec</button>
            <button onClick={inc}>inc</button>
            <button onClick={rnd}>rnd</button>
        </div>
    )
}
const mapStateProps = (state) =>{
    return{
        counter: state.props
    }
}
const mapDispatchProps = (dispatch) =>{
    return{
        inc: () => dispatch({type:'INC'}),
        dec: () => dispatch({type:'DEC'}),
        rnd: () =>{
            const value = Math.floor(Math.random() * 10);
            dispatch(rnd(value));
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(Counter);