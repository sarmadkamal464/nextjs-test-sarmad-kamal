import React, {FC, Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'


export interface IDropDown<T> {
    title: string
    items: IDropDownItem<T>[]
    onChange: (value: T) => void
}

export interface IDropDownItem<T> {
    text: string,
    value: T
}

interface IDropDownItemInternal<T> {
    text: string,
    value: T
    onClick: (text: string, value: T) => void
}

export const Dropdown: FC<IDropDown<any>> = ({title, items, onChange}) => {
    const [selectedText, setSelectedText] = useState<any>(null)

    const onClick = (text: string, value: any) => {
        setSelectedText(text)
        onChange(value)
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {selectedText || title}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-right absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {items.map((i, key) =>
                            <DropDownItem text={i.text} value={i.value} onClick={onClick} key={key}/>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const DropDownItem: FC<IDropDownItemInternal<any>> = ({text, value, onClick}) => (
    <Menu.Item>
        {({active}) => (
            <a
                onClick={(event) => {
                    event.preventDefault()
                    onClick(text, value)
                }}
                href=""
                className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
            >
                {text}
            </a>
        )}
    </Menu.Item>
)