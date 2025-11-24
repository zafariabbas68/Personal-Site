export default defineEventHandler(async (event) => {
  return {
    status: 'success', 
    message: 'Contact API endpoint',
    timestamp: new Date().toISOString()
  }
})
