import React, {FC, useState} from 'react'


export interface IToggleTwoButtons<T> {
    labelLeft: string
    labelRight: string
    valueLeft: T
    valueRight: T
    defaultValue?: T
    onChane: (value: T) => void
}


export const ToggleTwoButtons: FC<IToggleTwoButtons<any>> = (
    {
        labelRight,
        labelLeft,
        valueLeft,
        valueRight,
        defaultValue,
        onChane
    }
) => {
    const [activeValue, setActiveValue] = useState(defaultValue || valueLeft)

    const click = (value: any) => {
        setActiveValue(value)
        onChane(value)
    }


    const activeClass = ' bg-white border-gray-200 shadow-sm text-gray-900 '
    const inActiveClass = 'border-transparent text-gray-700 '
    const sharedClass = ' border  relative w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 '

    return (
        <div className="sm:flex sm:flex-col sm:align-center">
            <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
                <button
                    onClick={() => click(valueLeft)}
                    type="button"
                    className={(activeValue === valueLeft ? activeClass : inActiveClass) + sharedClass}
                >
                    {labelLeft}
                </button>
                <button
                    onClick={() => click(valueRight)}
                    type="button"
                    className={(activeValue === valueRight ? activeClass : inActiveClass) + sharedClass}
                >
                    {labelRight}
                </button>
            </div>
        </div>
    )
}