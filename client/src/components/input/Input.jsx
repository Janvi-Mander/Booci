import Form from '../form/Form'
import './input.scss'

function Input ({setbookTitleList}) {
    return (
        <section className='input__wrapper'>
            <div className='input__image'>
                put a image here
            </div>
            <Form setbookTitleList={setbookTitleList}/>
        </section>
    )
}

export default Input