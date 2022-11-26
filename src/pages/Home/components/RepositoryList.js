import React, { useState, useRef, useCallback } from 'react'
import RepositoryItem from './RepositoryItem'
import './RepositoryList.css'
import useReposSearch from '../../../global/useReposSearch'

export default function RepositoryList({search}) {
  const [per_page, setPer_page] = useState(10)
  const [pageNumber, setPageNumber] = useState(1)

  //custom Hook useReposSearch
  const {
    loading, 
    error, 
    repos, 
    hasMore
  } = useReposSearch(search,per_page,pageNumber)
  
  //observe last Element to send request
  const observer = useRef()
  const lastReposElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore){
        setPageNumber(prevPageNumber => {
          return prevPageNumber + 1
        })
      }
    })
    if (node) observer.current.observe(node)
  },[ loading, hasMore])

  return (
    <div className='container'>
      {
        repos.map((repo,index) =>{
          if (repos.length === index + 1){
            return  <RepositoryItem 
                      ref = { lastReposElementRef } 
                      key = { index } 
                      owner = {search}
                      name = { repo.name } 
                      stargazers_count = { repo.stargazers_count }
                      description = { repo.description }
                      language = { repo.language }
                    />
          } else {
            return <RepositoryItem 
                      key = { index } 
                      owner = {search}
                      name = { repo.name }
                      stargazers_count = { repo.stargazers_count } 
                      description = { repo.description }
                      language = { repo.language }
                    />
          }
          
        })
      }
      <div>{loading && 'Loading...'}</div>
      {/* <div>{error && 'error'}</div> */}
    </div>
  )
}
