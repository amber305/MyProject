import React, { useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumData[Number(albumId)].bgcolor;
 
  useEffect(()=>{
    if (isAlbum) {
      displayRef.current.style.background =`linear-gradient(${bgcolor},#121212)`
    }
    else{
      displayRef.current.style.background =`#121212`
    }
  })
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
    <Routes>
      <Route path ='/' elements={<DisplayHome/>} / >
      <Route path ='/album/:id' elements={<DisplayAlbum/>} / >

    </Routes> 
 
    </div>
  )
}

export default Display