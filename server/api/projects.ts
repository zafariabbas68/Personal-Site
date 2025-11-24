export default defineEventHandler(async (event) => {
  return {
    status: 'success',
    message: 'Projects API endpoint',
    timestamp: new Date().toISOString()
  }
})
