import React from 'react'
import Button from './Button'

export default function MiniSection({title, btnText, bg, textColor}: {title: string, btnText: string, bg: string, textColor: string}) {
  return (
    <div className={`bg-[${bg}] h-[300px] w-full flex flex-col items-center justify-center gap-10`}>
        <h1 className={`lg:text-5xl text-4xl text-center ${textColor} font-bold `}>
            {title}
        </h1>
        <Button text={btnText}/>
    </div>
  )
}
