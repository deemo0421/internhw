import React , { useContext }from 'react'
import './RepositoryItem.css'
import { useNavigate } from 'react-router-dom'
import { DetailContext } from '../../../global/detailContext'
const RepositoryItem = React.forwardRef(({ owner, name, description, language, stargazers_count },ref) => {
  const navigate = useNavigate()
  const [detailContext, setDetailContext] = useContext(DetailContext)

  const handleRepoDetail = () =>{
    navigate(`/reops/${owner}`)
    setDetailContext({
      owner:owner,
      reponame:name
    })
  }
  return (
    <div className='itemContainer' ref={ref}>
      <div >
        <span className='reposName' onClick={handleRepoDetail}>{name}</span>
      </div>
      <div className='reposIntroduce'>
        {description ?`${description}`:"no description"}
      </div>
      <div className='reposDetail'>
        <span className='detailProperty'>{language ?`${language}`:"no detail"}</span>
        <span className='detailProperty'>stargazers_count :{stargazers_count ?`${stargazers_count}`:"no detail"}</span>
      </div>
      <hr className='reposListHr'/>
    </div>
  )
})

export default RepositoryItem
