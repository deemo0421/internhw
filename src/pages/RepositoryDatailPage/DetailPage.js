import React, { useState, useEffect, useContext }from 'react'
import { DetailContext } from '../../global/detailContext'
import { apiOwnerRepos } from '../../global/apiConfig'
import './DetailPage.css'
import { Routes, Route, useNavigate } from 'react-router-dom'


export default function OwnerPage() {
  const [detailContext] = useContext(DetailContext)
  const [ reposDetail, setReposDetail ] = useState()
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if(loading){
      navigate(`/reops/${detailContext.owner}/${detailContext.reponame}`)
    } else{
      navigate(`/reops/${detailContext.owner}`)
    }
  },[loading,detailContext])


  useEffect(()=>{
    if( detailContext !== {}){
      apiOwnerRepos(detailContext.owner,detailContext.reponame)
      .then(response =>{
        console.log(response);
        setReposDetail({
          full_name : response.data.full_name,
          description : response.data.description,
          stargazers_count : response.data.stargazers_count,
          html_url : response.data.html_url,
          visibility : response.data.visibility,
        })
        setLoading(true)
      }).catch(err =>{
        console.log(err);
      })
    }
  },[detailContext])
  
  //Detail content Component
  const Detailcontent = () =>{
    return(
      <div className='detaicontainer'>
        <h2 className='detailtitle'>{reposDetail.full_name}</h2>
        <hr className='detailtitle'/>
        <p className='detaildescription'>
          description:{reposDetail.description} 
        </p>
        <div className='detailstargazers_count'>
          stargazers_count:{reposDetail.stargazers_count}
        </div>
        <div className='detaillink'>
          <a href = {reposDetail.html_url}>Link to repository</a>
        </div>
       
      </div>  
    )
  }
  return (
    <>
    <Routes>
      <Route path = {detailContext.reponame} element={ loading && <Detailcontent />} />
    </Routes>
    <div className='loading'>{!loading && 'Loading...'}</div>
    </>
  )
}
