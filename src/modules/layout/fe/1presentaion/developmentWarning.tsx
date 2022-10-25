import {config} from '@config'

export const DevelopmentWarning = () => (
  <>
    {!config.env.isProd && (
      <div className={'env'}>
        {config.env.isDev && 'Development / Local'}

        <style jsx>{`
          .env {
            text-align: center;
            padding: .3rem 0;
            background: #ffc800;
          }
        `}</style>
      </div>
    )}
  </>
)

