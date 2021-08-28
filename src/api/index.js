import axios from 'axios';
const API=axios.create({baseURL:"http://localhost:5000/api"})
const url = 'http://localhost:5000/api/post';
//const url_1 = 'http://localhost:5000/api/posts';
const url_2 = "http://localhost:5000/api/post/create/612a0ceaadf87b3644294370/";
const url_data = "http://localhost:5000/api/datas"
const url_3 = "http://localhost:5000/api/plan/create";
const url_4 = "http://localhost:5000/api/addbroadband/612a0ceaadf87b3644294370/";

export const fetchPosts = () => API.get("/posts");
export const fetchdataconsump = () => API.get("/datas");
//form
export const createPost = (newPost) => axios.post(url_2, newPost);
export const updatePost = (id, updatedPost) => axios.put(`${url}/${id}` ,updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const addtocart = (newPlan) => axios.post(url_3,newPlan);
export const addtocart_new = (newPlan) => axios.post(url_3,newPlan);

export const fetchplanscart = () => API.get("/plans");
export const fetchbroadband = () => API.get("/broadband");
//form
export const  createBPlan= (bpost) => axios.post(url_4,bpost);
