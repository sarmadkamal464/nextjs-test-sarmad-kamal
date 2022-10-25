/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        // domains: [
        //     {
        //         domain: 'example.com',
        //         defaultLocale: 'en-US',
        //     },
        //     {
        //         domain: 'example.nl',
        //         defaultLocale: 'nl-NL',
        //     },
        //     {
        //         domain: 'example.fr',
        //         defaultLocale: 'fr',
        //     },
        // ],
    },
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/nilsmich',
        domains: ['res.cloudinary.com']
    },
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            }
        )
        return config
    }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer(nextConfig)


