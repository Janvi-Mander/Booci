import PageHeader from '../../components/header/PageHeader'
import MainPageHero from '../../components/hero/MainPageHero'
import Input from '../../components/input/Input'
import Recommendation from '../../components/recommendation/Recommendation'
import { useState, useEffect } from 'react'; 
function HomePage() {
  const [bookTitleList, setbookTitleList] = useState ({})


// get book list data from API


//get individual book data from API


    return (
    <>
      <PageHeader />
      <MainPageHero />
      <Input
        setbookTitleList ={setbookTitleList} />
      <Recommendation bookTitleList={bookTitleList}/>
    </>
  );
}
export default HomePage
