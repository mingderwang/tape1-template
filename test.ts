import test from 'tape';
import  { generatePassword, Options }  from './generatePassword';

test('generatePassword', (t) => {
  // Test basic functionality
  t.test('basic', (t) => {

    const alice: Options = {
    };

    const password = generatePassword(alice);
    t.ok(password.length >= 8, 'should have a minimum length of 8');
    t.ok(/[a-z]/.test(password), 'should contain at least one lowercase letter');
    t.ok(/[A-Z]/.test(password), 'should contain at least one uppercase letter');
    t.ok(/[0-9]/.test(password), 'should contain at least one digit');
    t.end();
  })

    // Test custom length
    t.test('custom length', (t) => {
      const password = generatePassword({ length: 12 });
      t.equal(password.length, 12, 'should have the specified length');
      t.end();
    });
  
    // Test custom character set
    t.test('custom character set', (t) => {
      const password = generatePassword({ characters: 'abc123' });
      t.ok(/^[abc123]+$/.test(password), 'should only contain custom characters');
      t.end();
    });
  
    // Test invalid options
    t.test('invalid options', (t) => {
      t.throws(() => generatePassword({ length: 'not a number' }), /Invalid options/, 'should throw an error for invalid length');
      t.throws(() => generatePassword({ characters: '' }), /Invalid options/, 'should throw an error for empty characters');
      t.end();
    });
  
    t.end();
});
