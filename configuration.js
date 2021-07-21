exports.repositoryUrl = 'https://daily.test.sensenet.cloud'

exports.configuration = {
  clientId: process.env.GATSBY_REACT_APP_CLIENT_ID || '', // businesscat clientId for dev.demo.sensenet.com
  clientSecret: process.env.GATSBY_REACT_APP_CLIENT_SECRET || '',
  identityServerUrl: 'https://daily-is.test.sensenet.cloud',
}
