import './form.scss'
function Form (){
return(
    <div className='form__wrapper'>
        <h1 className='form__title'>Get started with YOUR book journey here!</h1>
        <form className='form__form'>
            <div className='form__topics'>
                <label className='form__subtitle'>Pick A Topic:</label>
                <select name="topic">
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
                <textarea name='description'></textarea>
            </div>
        </form>
    </div>
)
}

export default Form