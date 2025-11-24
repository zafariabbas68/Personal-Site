export default defineEventHandler(async (event) => {
  return {
    status: 'success',
    message: 'Users management endpoint',
    timestamp: new Date().toISOString()
  }
})
