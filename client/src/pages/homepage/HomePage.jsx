import PageHeader from '../../components/header/PageHeader'
import MainPageHero from '../../components/hero/MainPageHero'
import Input from '../../components/input/Input'
import Recommendation from '../../components/recommendation/Recommendation'
import { useState, useEffect } from 'react'; 
function HomePage() {
  const [bookTitleList, setbookTtileList] = useState ({})

// get book list data from API


//get individual book data from API


    return (
    <>
      <PageHeader />
      <MainPageHero />
      <Input />
      <Recommendation />
    </>
  );
}
export default HomePage
