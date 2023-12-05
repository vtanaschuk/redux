import {connect} from 'react-redux'
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd, smth}) => {
    return(
        <div>
            <h1 id="counter">{counter} {smth}</h1>
            <button onClick={dec}>dec</button>
            <button onClick={inc}>inc</button>
            <button onClick={rnd}>rnd</button>
        </div>
    )
}
const mapStateProps = (state) =>{
    return{
        counter: state.value,
        smth: state.foo,
    }
}
const mapDispatchProps = (dispatch) =>{
    // const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
    return bindActionCreators( actions, dispatch )
}

export default connect(mapStateProps, mapDispatchProps)(Counter);