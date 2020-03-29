const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});