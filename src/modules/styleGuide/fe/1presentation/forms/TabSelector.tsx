import React from 'react'

export interface ITabSelector {
  isActive: boolean
  children: React.ReactNode
  onClick: () => void
  width: string
}

export const TabSelector = ({width, isActive, children, onClick}: ITabSelector) => (
  <button style={{width, background: 'none', border: 'none', cursor: 'pointer'}}
          className={` group inline-flex ml-10 items-center px-0 py-6 font-medium text-2xl cursor-pointer ${isActive
            ? 'text-black-900 focus:text-gray-600'
            : 'text-gray-400 hover:text-gray-600 focus:text-gray-600'
          }`} onClick={onClick}>
    {children}
  </button>
)
