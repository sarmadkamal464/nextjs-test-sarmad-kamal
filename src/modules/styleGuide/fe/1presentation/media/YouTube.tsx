import React from 'react'

export interface IYouTube {
  src: string
  title: string
  width: number
  height: number
}

export const YouTube = ({src, title, width, height}: IYouTube) => {

  return (
    <div className="embed-container">
      <iframe title={title} src={src} allowFullScreen data-mce-fragment="1" />

      <style jsx>{`
        .embed-container {
          position: relative;
          padding-bottom: ${height / width * 100}%;
          height: 0;
          overflow: hidden;
          max-width: 100%;
        }

        .embed-container iframe, .embed-container object, .embed-container embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
