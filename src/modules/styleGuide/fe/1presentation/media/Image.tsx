import React from 'react'

export interface IImage {
  src: string
  alt: string
  title?: string
  cover?: boolean
  fullWidth?: boolean
}

export const Image = ({src, title, alt, cover, fullWidth}: IImage) => {
  const css = `image ${fullWidth && 'fullWidth'} ${!!cover && 'cover'}`

  return (
    <>
      <img className={css} src={src} title={title || alt} alt={alt} />

      <style jsx>{`
        .image {
          box-sizing: content-box;
          line-height: 0;
        }

        .fullWidth {
          width: 100%;
        }

        .cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
      `}</style>
    </>
  )
}
