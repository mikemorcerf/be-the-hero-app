const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Organization', () => {
    beforeEach( async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new Organization', async () => {
        const response = await request(app)
            .post('/orgs')
            .send({
                name : "Test Organization",
                email : "test@org.com",
                phone : "3333333333",
                city : "Orgville",
                state : "AA",
                website : "www.test.org",
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});