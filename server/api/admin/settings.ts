export default defineEventHandler(async (event) => {
  return {
    status: 'success',
    message: 'Site settings endpoint', 
    timestamp: new Date().toISOString()
  }
})
