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
➜  tape1-template git:(main) ✗ yarn test
yarn run v1.22.19
$ tape -r ts-node/register tests/**/*.ts | npx tap-spec

  generatePassword


  basic

    jQV2Yz!0
    ✔ should have a minimum length of 8
    ✔ should contain at least one lowercase letter
    ✔ should contain at least one uppercase letter
    ✔ should contain at least one digit

  custom length

    Y6bvp9BnLN!0
    ✔ should have the specified length

  custom character set

    3ca3311b
    ✔ should only contain custom characters

  invalid options

    ✔ should throw an error for invalid length
    ✔ should throw an error for empty characters


  total:     8
  passing:   8
  duration:  60ms


✨  Done in 3.84s.
```
