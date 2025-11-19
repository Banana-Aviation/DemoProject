import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/', async function handler(request, response) {
    const ip = request.ip
     response.type('text/html')
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hi</title>
</head>
<body>
<h1>Hello OMC</h1>
<img src="https://omc.co.il/omcgroup/images/omc_logo_294x62.png" width=294px height=62px ></img>
<h2>You are coming from : ${ip}</h2>
</body>
</html>
    `;
})

try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (error) {
    console.error(error)
    process.exit(1);
}