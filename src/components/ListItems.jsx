import React from 'react'

const ListItems = () => {

    const categories = [
         'Home','Music','Original video animation', 'Trailers', 'Gaming','JavaScript', 'Mixes','Computer Programming', 'Live','Disha Vakani','Jon Snow','Comic Books','Bowling','Web Series','Comedy clubs','Move Musicals','Batting','Recently uploaded','Watched','New to you'
    ]
  return (
    <div className='flex overflow-x-scroll pt-18  px-4 sticky top-0 bg-white z-40'>
      <div className='flex space-x-4 flex-nowrap'>
        {categories.map((category)=>{
            return (
                <div key={category} className='mb-4 flex-none rounded-xl bg-gray-200 text-gray-700 px-6 py-2 duration-200 font-medium flex hover:bg-gray-400 cursor-pointer'> {category} </div> 
            )
        })
      }
      </div>
    </div>
  )
}

export default ListItems
