import React from 'react'

export default function Image_preview({preview}) {
    return (
        <>
            <div className="px-4 mx-4 w-[12%] h-auto border border-gray-400">
                {
                   Array.isArray(preview)
                    ?
                    
                    preview.map((prev,index)=>{
                        const previ=URL.createObjectURL(prev)
                        // console.log(previ)
                        return(
                            <img src={previ} alt="No preview to show" className="text-red-400" key={index}></img>
                        )
                    })
                    :
                    preview
                    ?
                    <img src={preview} alt="No preview to show" className="text-red-400"></img>
                    :
                    <p>No preview available</p>

                }
            </div>
        </>

    )
}
