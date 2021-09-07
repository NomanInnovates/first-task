import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataFrom } from '../redux/action/todoAction';

const Header = () => {

    const userId = useSelector(state => state.AuthReducer.user.uid);
    // console.log("check user in header" ,userId)
    const [inputText, setInputText] = useState('');
    const [dueDate , setDueDate] = useState();
    const inputDateHandler = (e) => {
        setDueDate(e.target.value)
        // setDueDate(e.target.value)
        console.log("date sekect",dueDate)
    }
    const dispatch = useDispatch();
    const inputHandler = e => {
        setInputText(e.target.value)
      };
    const submitHandler = e => {
        e.preventDefault();
        console.log("data in submit",userId)
        if (inputText !== "" && inputText.length >= 3) {
            setInputText('')   
            dispatch(dataFrom(inputText,dueDate, userId))
        }
      
        
        };

    return(
        <form>
            <div className="header">
            <input type='text' value={inputText} placeholder=" Add your new todo" onChange={inputHandler} className='todo_input' />
            <input type="date" id="start" name="trip-start"
       value={new Date()}
       min={new Date()} onChange={inputDateHandler}  />


            <button onClick={submitHandler} className='todo_button' type="submit">
                +
            </button>
        </div>
        
        </form>

    );
}
export default Header;