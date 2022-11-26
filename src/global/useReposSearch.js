import { useEffect, useState } from "react";
import { apiSearchRepos } from "./apiConfig";
import axios from "axios"

export default function useReposSearch(search,per_page, pageNumber){
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [ repos, setRepos ] = useState([])
    const [ hasMore, setHasMore ] = useState(false)

    useEffect(()=>{
        setRepos([])
    },[search])


    useEffect(()=>{
        setLoading(true)
        setError(false)
        let cancel
        //github List repos for a user api
        apiSearchRepos(
            search,
            {params:{per_page: per_page, page: pageNumber},  
            //取消request
            cancelToken: new axios.CancelToken(c => cancel = c)   
        }).then(res=>{
            console.log(res);
            setRepos(prevRepos =>{
                return [...prevRepos, ...res.data.map(r => {
                    const { name, stargazers_count, description, language} = r
                    return {
                        name : name,
                        stargazers_count :stargazers_count,
                        description : description,
                        language : language,
                    }
                })]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e =>{
            if (axios.isCancel(e))return
            setError(true)
        })
        return () => cancel()
    },[search,per_page, pageNumber])
    return { loading, error, repos, hasMore }
}