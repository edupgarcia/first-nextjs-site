async function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();

  // const subscribersResponse = await fetch(`https://api.convertkit.com/v03/subscribers?apo_secret=${CONVERTKIT_API_SECRET}`);
  // const subscribersResponseJson = await subscribersResponse.json();
  // const inscritos = subscribersResponseJson.total_subscribers;
  const inscritos = 0;

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  response.json({
    date: dynamicDate.toUTCString(),
    inscritos: inscritos
  });
}

export default tempo;
