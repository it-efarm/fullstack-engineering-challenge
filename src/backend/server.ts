import Fastify from 'fastify'
import {SponsoredService} from './sponsored.service.js';

const main = async () => {
    const fastify = Fastify({
        logger: true
    })
    try {
        fastify.get('/', SponsoredService.getSponsoredItems);

        await fastify.listen({host: '0.0.0.0', port: 3000})
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

void main()
