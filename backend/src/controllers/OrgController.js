const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const orgs = await connection('orgs').select('*');
        return response.json(orgs);
    },

    async create(request, response){
        const { name, email, phone, city, state, website } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('orgs').insert({
            id,
            name,
            email,
            phone,
            city,
            state,
            website,    
        });
    
        return response.json({ id });
    }
};