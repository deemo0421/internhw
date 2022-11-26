import axios from "axios"
//api config
const SearchRequest = axios.create({
    baseURL:'https://api.github.com/users',
    headers:{"Content-Type":"application/json"}
})

const OwnerReposRequest = axios.create({
    baseURL:'https://api.github.com/repos',
    headers:{"Content-Type":"application/json"}
})

export const apiSearchRepos = (search, config) => SearchRequest.get(`/${search}/repos`, config)
export const apiOwnerRepos = (owner, repo) => OwnerReposRequest.get(`/${owner}/${repo}`)