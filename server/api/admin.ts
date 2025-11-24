export default defineEventHandler(async (event) => {
  return {
    status: 'success',
    message: 'Admin API endpoint',
    timestamp: new Date().toISOString()
  }
})
