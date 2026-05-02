import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidapi';
import Sidebar from "./Sidebar";
import SearchCard from './SearchCard';


const Search = () => {

  const [result, setresult] = useState();
  const {searchquery} =  useParams();

  useEffect(() => {
    fetchsearchresults();
  },[searchquery])

  const fetchsearchresults = (() => {
    fetchData(`search/?q=${searchquery}`).then(({contents}) => {
      console.log(contents);
      setresult(contents);
    })
  })

  return (
    <div>
      <div className='flex flex-row mt-24 h-[calc(100%-56px)]'>
        <Sidebar />
        <div className='h-[calc(100vh-30px)] overflow-y-scroll overflow-x-hidden'>
          <div className='grid grid-cols-1 gap-2 p-2'>
            {
              result?.map((item, index) => {
                if(item?.type !== 'video') return false
                return <SearchCard key={index} video = {item?.video}/>;
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
