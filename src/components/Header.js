import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataFrom } from '../redux/action/todoAction';

const Header = () => {

    const userId = useSelector(state => state.AuthReducer.user.uid);
    console.log("check user in header" ,userId)
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const inputHandler = e => {
        setInputText(e.target.value)
      };
    const submitHandler = e => {
        e.preventDefault();
        console.log("data in submit",userId)
        if (inputText !== "" && inputText.length >= 3) {
            setInputText('')   
            dispatch(dataFrom(inputText , userId))
        }
      
        
        };

    return(
        <form>
            <div className="header">
            <input type='text' value={inputText} placeholder=" Add your new todo" onChange={inputHandler} className='todo_input' />
            <button onClick={submitHandler} className='todo_button' type="submit">
                +
            </button>
        </div>
        
        </form>

    );
}
export default Header;