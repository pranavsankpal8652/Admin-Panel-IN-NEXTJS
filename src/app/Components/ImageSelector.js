import React from 'react'
import Image_preview from './Image_preview'

export default function ImageSelector({label,id,handleFunction,preview}) {
    return (
        <>
            <div className="mb-4 py-6 ">
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                   {label}
                </label>
                <div className="flex gap-[50px] items-center">
                    <input
                        type="file"
                        id={id}
                        name={id}
                        accept="image/*"
                        onChange={(e) => handleFunction(e)}
                        className="w-[70%] border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
                    />
                    <Image_preview preview={preview} />
                </div>

            </div>
        </>
    )
}
