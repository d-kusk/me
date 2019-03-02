exports.handler = async (event, context) => {
  return {
    headers: { 'Content-type': 'application/json' },
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World' })
  }
}
