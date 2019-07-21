import Airtable from 'airtable-node'

const getWorks = () => {
  return new Promise((resolve, reject) => {
    const { AIRTABLE_API_KEY, APP_ID } = process.env
    const worksTable = new Airtable({ apiKey: AIRTABLE_API_KEY })
      .base(APP_ID)
      .table('works')

    return worksTable
      .list({
        view: 'Grid view'
      })
      .then(response => {
        resolve(response)
      })
  })
}

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const worksDto = {}

  try {
    const works = await getWorks()
    worksDto.works = works.records
  } catch (error) {
    worksDto.message = error
  }

  return callback(null, {
    headers: { 'Content-type': 'application/json' },
    statusCode: 200,
    body: JSON.stringify(worksDto)
  })
}
