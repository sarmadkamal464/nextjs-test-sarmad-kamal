import {ReactNode} from 'react'


interface IMenuSection {
  title?: string
  children: ReactNode
}

export const MenuSection = ({children, title}: IMenuSection) => (
  <div className="pt-4 pb-3 space-y-1 border-t border-gray-200 first:border-none">
    {title &&
      <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">{title}</div>}
    {children}
  </div>
)
