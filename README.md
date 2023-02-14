# build

```
yarn
```

# test

```
yarn test
```

# test result

```
✗ yarn test     
yarn run v1.22.19
$ node test.js
TAP version 13
# generatePassword
# basic
ok 1 should have a minimum length of 8
ok 2 should contain at least one lowercase letter
ok 3 should contain at least one uppercase letter
ok 4 should contain at least one digit
# custom length
ok 5 should have the specified length
# custom character set
ok 6 should only contain custom characters
# invalid options
ok 7 should throw an error for invalid length
ok 8 should throw an error for empty characters

1..8
# tests 8
# pass  8

# ok

✨  Done in 0.44s.
```
