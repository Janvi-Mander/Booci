import BookPhotos from '../bookPhotos/BookPhotos'
import BookTitles from '../bookTitles/BookTitles'
import './recommendation.scss'

function Recommendation({bookTitleList}){
    return (
        <section className='recommendation__wrapper'>
            <div className='recommendation__arrow'></div>
            <div className='recommendation__info-container'>
            <BookTitles bookTitleList={bookTitleList} />
            <BookPhotos />
            </div>
        </section>
    )
}

export default Recommendation