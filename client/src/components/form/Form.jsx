import './form.scss'
import axios from "axios";

function Form ({setbookTitleList}){
    const submitHandler = (e)=> {
        e.preventDefault();
        let topic = e.target.topic.value;
        let description =e.target.description.value;
        axios
        .get(`http://localhost:8080/title/${topic}/${description}`)
        .then((r)=> {
            setbookTitleList(r.data)
        })
    }

return(
    <div className='form__wrapper'>
        <h1 className='form__title'>Get started with YOUR book journey here!</h1>
        <form className='form__form' onSubmit={submitHandler}>
            <div className='form__topics'>
                <label className='form__subtitle'>Pick A Topic:</label>
                <select name="topic">
                    <option value="topic">Pick a Topic Here</option>
                    <option value="personal development">Personal Development</option>
                    <option value="spiritality">Spiritality</option>
                    <option value="finance">Finance</option>
                    <option value="career">Career</option>
                    <option value="romance">Romance</option>
                    <option value="health">Health</option>
                </select>
            </div>
            <div className='form__description'>
                <label className='form__subtitle'>Descibe What You Are Looking For In Your Book: </label>
                <textarea name='description' rows="10"></textarea>
            </div>
            <button className="form__button" type="submit"  placeholder=''>Get Your Recommended Books!</button>
        </form>
    </div>
)
}

export default Form

