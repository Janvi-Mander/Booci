import './bookTitles.scss'

function BookTitles ({bookTitleList}){
    return(
        <div className='title__wrapper'>
            <p className='book__titles'>{bookTitleList.title}</p>
            <p className='book__author'>{bookTitleList.author}</p>
            <p className='book__description'>{bookTitleList.description}</p>

        </div>
    )
}

export default BookTitles