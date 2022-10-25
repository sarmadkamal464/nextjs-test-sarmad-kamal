import {config} from '@config'
import React from 'react'
import {Container} from '../container'

export const FooterNavigation = () => {

  return (
    <footer>
      <Container>
        <nav>
          {/*<LocaleSwitcher />*/}

          <div>
            &copy; {config.websiteName}
          </div>
        </nav>
      </Container>


      <style jsx>{`
        footer {
          padding: 3rem 0;
          color: #525f7f;
          border-top: 2px solid #e7e7e7;
          background: #f6f9fc;
          margin-top: auto;
        }

        nav {
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        li {
          padding: .2rem 0;
        }


        @media (min-width: 500px) {
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          ul {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;
          }

          li {
            margin: 0 .5rem;
          }
        }
      `}</style>
    </footer>
  )
}


