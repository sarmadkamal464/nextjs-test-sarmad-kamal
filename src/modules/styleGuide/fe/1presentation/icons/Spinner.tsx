import React, {Fragment} from 'react'
import {ImSpinner9} from 'react-icons/im'

export const Spinner = () => (
  <Fragment>
    <span className={'spinner'}>
     <ImSpinner9 />
    </span>


    <style jsx>{`
      .spinner {
        display: inline-block;
        animation: spin 1s infinite linear;
        line-height: 0;
        vertical-align: top;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </Fragment>
)
