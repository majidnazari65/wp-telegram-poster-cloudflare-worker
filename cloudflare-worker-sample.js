export default {
  async fetch(request, env, ctx) {
    return handleRequest(request,env);
  },
};

async function handleRequest(request, env) {
  // Check if the request is a POST
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  // Verify content type is JSON
  const contentType = request.headers.get('content-type')
  if (!contentType || !contentType.includes('application/json')) {
    return new Response('Unsupported content type', { status: 415 })
  }

  try {
    // Parse the JSON body
    const body = await request.json()
    const { secret, title, excerpt, permalink, featured_image, chat_id, read_more_text, hashtags } = body

    // Validate the secret key
    if (secret !== env.SECRET) {
      return new Response('Unauthorized', { status: 401 })
    }

    // Ensure required fields are present
    if (!title || !permalink || !chat_id) {
      return new Response('Missing required fields', { status: 400 })
    }

    // Construct the Telegram message
    let messageText = `*${title}*\n\n${excerpt || ''}\n[${read_more_text || 'نمایش بیشتر'}](${permalink})`
    // Append hashtags if they exist
    if (Array.isArray(hashtags) && hashtags.length > 0) {
      messageText += '\n\n' + hashtags.join(' ')
    }


    let telegramResponse
    if (featured_image) {
      // Send photo with caption if featured image exists
      const url = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendPhoto`
      const params = {
        chat_id: chat_id,
        photo: featured_image,
        caption: messageText,
        parse_mode: 'Markdown'
      }
      telegramResponse = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      })
    } else {
      // Send text message if no featured image
      const url = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`
      const params = {
        chat_id: chat_id,
        text: messageText,
        parse_mode: 'Markdown'
      }
      telegramResponse = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      })
    }
  

    // Check Telegram API response
    if (telegramResponse.ok) {
      return new Response('با موفقیت به تلگرام ارسال شد.', { status: 200 })
    } else {
      console.error('Telegram API error:', await telegramResponse.text())
      return new Response('ارسال ناموفق بود!', { status: 500 })
    }

  } catch (error) {
    console.error('Error processing request:', error)
    return new Response('Bad request', { status: 400 })
  }
}