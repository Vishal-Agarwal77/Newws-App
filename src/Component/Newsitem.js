import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
// import data from './sample-output.json';
import axios from 'axios';

export default function Newsitem({ setProgress, SearchQuery }) {
    const [articles, setarticles] = useState([]);
    const [PageCategory, setPageCategory] = useState({
        category: "General",
        page: 1
    })
    const [ActiveTab, setActiveTab] = useState("general");
    const [loading, setloading] = useState(false);
    const [totalResults, settotalResults] = useState(0);
    const search = useSelector(state => state.search);
    useEffect(() => {
        getNews();
    }, []);
    const getNews = async () => {
        setProgress(10);
        setloading(true);
        try {
            let response;
            if (SearchQuery) {
                let Url = window.location.href;
                let query = Url.slice(Url.indexOf("?") + 1, Url.length).replaceAll("%", " ");
                console.log(query);
                response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=2637739d54274af3b24003c79d7504a5&page=${PageCategory.page}&pageSize=5`);
            }
            else {
                response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${PageCategory.category}&apiKey=2637739d54274af3b24003c79d7504a5&page=${PageCategory.page}&pageSize=5`);
            }
            setProgress(30);
            if (response.status === 200) {
                setarticles(articles.concat(response.data.articles));
                setProgress(70);
                setPageCategory({ ...PageCategory, page: PageCategory.page + 1 });
                setloading(false);
                settotalResults(response.data.totalResults);
                setProgress(100);
            }
            else {
                throw new Error("Some error occured");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const ChangeCategory = (CategoryType) => {
        setPageCategory({
            category: { CategoryType },
            page: 1
        })
        setActiveTab(CategoryType);
        (async () => {
            setProgress(10);
            setloading(true);
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${CategoryType}&apiKey=2637739d54274af3b24003c79d7504a5&page=${PageCategory.page}&pageSize=5`);
                setProgress(30);
                if (response.status === 200) {
                    console.log(response);
                    setarticles(response.data.articles);
                    setProgress(70);
                    setPageCategory({ ...PageCategory, page: PageCategory.page + 1 });
                    setloading(false);
                    settotalResults(response.data.totalResults);
                    setProgress(100);
                }
                else {
                    throw new Error("Some error occured");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }
    // const getsearchresult = async () => {
    //     if (!search) {
    //         return;
    //     }
    //     props.setProgress(10);
    //     setloading(true);
    //     const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=2637739d54274af3b24003c79d7504a5`);
    //     props.setProgress(30);
    //     const data = await response.json();
    //     props.setProgress(70);
    //     setarticles(data.articles);
    //     setloading(false);
    //     settotalResults(data.totalResults);
    //     setpage(page + 1);
    //     props.setProgress(100);
    // }
    // const fetchMoredata = async () => {
    //     // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2637739d54274af3b24003c79d7504a5&page=${page}&pageSize=${props.pageSize}`);
    //     setloading(true);
    //     const data = await response.json();
    //     setarticles(articles.concat(data.articles));
    //     settotalResults(data.totalResults);
    //     setloading(false);
    //     setpage(page + 1);
    // }
    return (
        <>
            {SearchQuery
                ?
                <div className='flex flex-col gap-y-8 px-12 py-10'>
                    <p className='text-4xl font-medium text-[#383838]'>Search Results</p>
                </div>
                :
                <div className='flex flex-col gap-y-8 px-12 py-10'>
                    <p className='text-4xl font-medium text-[#383838]'>Latest News</p>
                    <div className='flex gap-x-2 flex-wrap'>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "general" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("general")}>General</p>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "business" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("business")}>Business</p>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "entertainment" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("entertainment")}>Entertainment</p>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "health" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("health")}>Health</p>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "science" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("science")}>Science</p>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "sport" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("sport")}>Sports</p>
                        <p className={`border-2 font-medium rounded-pill px-2 cursor-pointer hover:bg-[#eaeaea] ${ActiveTab === "technology" ? "border-[#af695c] text-[#af695c]" : "border-[#383838] text-[#383838]"}`} onClick={() => ChangeCategory("technology")}>Technology</p>
                    </div>
                </div>}
            {articles &&
                <div className="flex flex-wrap w-[100%] box-border px-12">
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={getNews}
                        hasMore={articles.length !== totalResults}
                        loader={<Loading />}
                        endMessage={<p>No more data to load.</p>}
                    >
                        <div className="flex flex-wrap gap-x-1 box-border gap-y-8 justify-between">
                            {
                                articles.map((el) => {
                                    return (
                                        <Card title={el.title} description={el.description} imageUrl={el.urlToImage} newsUrl={el.url} author={el.author} published={el.publishedAt} source={el.source.name} />
                                    )
                                })
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            }
        </>
    )
}
