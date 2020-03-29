const generateUniqueid = require('../utils/generateUniqueid');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const orgs = await connection('orgs').select('*');
        return response.json(orgs);
    },

    async create(request, response){
        const { name, email, phone, city, state, website } = request.body;

        const id = generateUniqueid();
    
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