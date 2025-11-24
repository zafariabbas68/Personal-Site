// server/api/contact.ts
export default defineEventHandler(async (event) => {
  try {
    if (event.method === 'POST') {
      const body = await readBody(event)

      // Basic validation
      if (!body.name || !body.email || !body.message) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Missing required fields: name, email, message'
        })
      }

      // Here you'll later add:
      // - Email sending logic
      // - Database storage
      // - Notification system

      return {
        status: 'success',
        message: 'Contact form submitted successfully',
        data: {
          id: Math.random().toString(36).substr(2, 9), // Temporary ID
          name: body.name,
          email: body.email,
          receivedAt: new Date().toISOString()
        }
      }
    }

    // GET request - return contact info
    return {
      status: 'success',
      data: {
        email: 'your-email@example.com',
        phone: '+1234567890',
        address: 'Your address here',
        businessHours: 'Mon-Fri 9AM-5PM'
      },
      timestamp: new Date().toISOString()
    }

  } catch (error) {
    console.error('Contact API error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Internal Server Error'
    })
  }
})