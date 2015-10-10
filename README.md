# typescript-5102
https://github.com/Microsoft/TypeScript/issues/5102 Node.js-like module resolution doesn't follow parent paths

## Reproducing steps

```bash
typescript-5102$ npm i ./mylib
typescript-5102$ cd myapp
typescript-5102/myapp$ tsc -v
message TS6029: Version 1.6.2
typescript-5102/myapp$ tsc -p .
index.ts(1,19): error TS2307: Cannot find module 'mylib'.
index.ts(5,17): error TS2339: Property 'id' does not exist on type 'MyApp'.
typescript-5102/myapp$ tsc -p $(pwd)
# no error
typescript-5102/myapp$ npm i -g typescript@next
typescript-5102/myapp$ tsc -v
message TS6029: Version 1.7.0-dev.20151006
typescript-5102/myapp$ tsc -p .
index.ts(1,19): error TS2307: Cannot find module 'mylib'.
index.ts(5,17): error TS2339: Property 'id' does not exist on type 'MyApp'.
```
