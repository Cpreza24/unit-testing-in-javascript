const { expect } = require('chai');
const {
    validateEmail,
    validatePassword,
} = require('../src/basic-functions.js');

it('should return true for a valid email', () => {
    const validEmail = 'test@example.com';
    const result = validateEmail(validEmail);
    expect(result).to.be.true; // Chai assertion
});

it('should return true for a valid password', () => {
    const testPassword = 'abcd1234';
    const result = validatePassword(testPassword);
    expect(result).to.be.true;
});
