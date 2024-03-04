import React from 'react'

export default function Card(props) {
    return (
        <div className="h-[500px] w-[22rem] border-2 border-[] flex flex-col gap-y-4 rounded-xl text-[#2a2a2a]">
            <img src={props.imageUrl ? props.imageUrl : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} className="w-[100%] h-[166px]" alt="..." />
            <div className="flex flex-col gap-y-4 px-2">
                <h5 className="h-[42px] overflow-hidden">{props.title}</h5>
                <span className="rounded-full w-fit px-2 text-[0.8rem] py-px bg-[#AF695C] text-[#F9F4ED]">{props.source}</span>
                <p className="h-[96px] overflow-hidden">{props.description}</p>
                <a href={props.newsUrl} target="_blank" className="py-2 px-4 rounded-xl w-fit bg-[#af695c] text-[#F9F4ED]">Read full article</a>
                <p className="text-[#4a4a4a]"><small className="text-body-secondary">By {!props.author ? "Unknown" : props.author} on {new Date(props.published).toGMTString()}</small></p>
            </div>
        </div>
    )
}
