import React from 'react'

const RecipeCard = ({ children }) => {
    return (
        <>
            <div className="bg-pink-400 w-60 h-36 px-3 py-3 rounded-md shadow-lg hover:cursor-pointer hover:-translate-y-2">
                {children}
            </div>
        </>
    )
}

const Header = ({ children }) => {
    return (
        <>
            <div className="bg-slate-500 bg-opacity-50 h-fit w-fit px-5 py-1 rounded-md">
                <div className="text-md text-white font-semibold ">{children}</div>
            </div>
        </>
    )
}

const Subtitle = ({ children }) => {
    return (
        <>
            <div className="mt-2">{children}</div>
        </>
    )
}

RecipeCard.Header = Header
RecipeCard.Subtitle = Subtitle

export default RecipeCard