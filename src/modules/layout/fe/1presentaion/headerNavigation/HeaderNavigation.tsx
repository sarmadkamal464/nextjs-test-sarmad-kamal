import {config} from '@config'
import {Popover} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import React from 'react'
import {Container} from '../container'
import {HeaderLink} from './HeaderLink'


const classNames = (...classes) => classes.filter(Boolean).join(' ')

export const HeaderNavigation = () => {
  return (
    <Popover as="header" className={({open}) =>
      classNames(
        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
        'bg-white shadow lg:static lg:overflow-y-visible'
      )
    }>
      {({open}) => (
        <Container>
          <div className="flex justify-between h-16">

            <div className="flex px-2 lg:px-0">
              <div className="hidden lg:flex lg:space-x-8">
                <HeaderLink
                  name={<img className="block h-8 w-auto" src="/logo.svg" alt={config.websiteName + ' logo'}/>}
                  href={config.routes.home}
                />
              </div>
            </div>
            <div className="flex px-2 lg:px-0">
              <div className="hidden lg:flex lg:space-x-8">
                <HeaderLink name={'countries Overview'} href={config.routes.countriesOverview}/>
              </div>
            </div>
            <div className="flex px-2 lg:px-0">
              <div className="hidden lg:flex lg:space-x-8">
                <HeaderLink name={'Toggle'} href={config.routes.toggle}/>
              </div>
            </div>
            <div className="flex px-2 lg:px-0">
              <div className="hidden lg:flex lg:space-x-8">
                <HeaderLink name={'Countries API Path'} href={config.routes.countriesApiTest}/>
              </div>
            </div>

            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Popover.Button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cFocus">
                <span className="sr-only">Open main menu</span>
                {open
                  ? <XIcon className="block h-6 w-6" aria-hidden="true"/>
                  : <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                }
              </Popover.Button>
            </div>
          </div>


          <Popover.Panel className="lg:hidden">
            <div>
              <HeaderLink
                name={'Home'}
                href={config.routes.home}
              />
            </div>
            <div>
              <HeaderLink name={'countries Overview'} href={config.routes.countriesOverview}/>
            </div>
            <div>
              <HeaderLink name={'Toggle'} href={config.routes.toggle}/>
            </div>
            <div>
              <HeaderLink name={'Countries API Path'} href={config.routes.countriesApiTest}/>
            </div>
          </Popover.Panel>
        </Container>
      )}
    </Popover>
  )
}

