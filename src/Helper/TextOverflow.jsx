import React from 'react'

function TextOverflow({text,limit}) {
    return (
        <>
            {text.length >= limit ? <abbr className='cursor-pointer' title={text} > {text.substring(0, limit || 50)}....</abbr> : <span>{ text}</span>}
        </>
  )
}

export default TextOverflow