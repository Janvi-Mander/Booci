import './bookTitles.scss'

function BookTitles ({bookTitleList}){
    return(
        <div className='title__wrapper'>
            <div className='book__wrapper'>
                <p className='book__titles'>The Title of the book is : <span className='info'>{bookTitleList.title}</span></p>
                <p className='book__author'>The author of the book is : <span className='info'>{bookTitleList.author}</span></p>
                <p className='book__description'>What is the book About : <span className='info'>{bookTitleList.description} </span></p>
            </div>
        </div>
    )
}

export default BookTitles