import Airtable from 'airtable'
// import 'dotenv.config'

const base = new Airtable({ apiKey: 'AIRTABLE_API_KEY' }).base('APP_ID')

const getWorks = () => {
  return new Promise((resolve, reject) => {
    const works = base('works').select({
      view: 'Grid view'
    })

    resolve(works)
  })
}

// class WorksDTO {
//   constructor(records) {
//     this.works = []
//     this.setWorks(records)
//   }

//   setWorks(datas) {
//     if (!datas) {
//       return
//     }
//     for (const record of datas) {
//       this.works.push(record.fields)
//     }
//   }
// }

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const works = await getWorks()
  return works.eachPage(
    (records, fetchNextPage) => {
      const worksDTO = {}
      let works = []
      for (const record of records) {
        works.push(record.fields)
      }
      worksDTO.works = works

      return callback(null, {
        headers: { 'Content-type': 'application/json' },
        statusCode: 200,
        body: JSON.stringify(worksDTO)
      })
    },
    err => {
      return callback(null, {
        headers: { 'Content-type': 'application/json' },
        statusCode: 500,
        body: JSON.stringify({ message: err })
      })
    }
  )
}
