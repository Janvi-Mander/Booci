import './bookPhotos.scss'
import photo from "../../assets/bookphoto.jpg"

function BookPhotos () {
    return(
        <div className='photo__wrapper'>
            <img  className='photo__image' src={photo} />
        </div>
    )
}

export default BookPhotos