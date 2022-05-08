1.Requirements to install:
   npm i @types/express --save-dev 
   npm i @types/jasmine --save-dev 
   npm i @types/node  --save-dev 
   npm i @types/sharp --save-dev 
   npm i @types/supertest --save-dev 
   npm i @typescript-eslint/eslint-plugin --save-dev 
   npm i @typescript-eslint/parser --save-dev 
   npm i eslint --save-dev 
   npm i eslint-config-prettier --save-dev 
   npm i eslint-import-resolver-typescript --save-dev 
   npm i express --save-dev 
   npm i fs --save-dev 
   npm i jasmine --save-dev 
   npm i jasmine-spec-reporter --save-dev 
   npm i jasmine-ts-console-reporter --save-dev 
   npm i nodemon --save-dev 
   npm i prettier --save-dev 
   npm i react-scripts --save-dev 
   npm i sharp --save-dev 
   npm i supertest --save-dev 
   npm i ts-node --save-dev 
   npm i typescript --save-dev 
   npm i image-size


2.Start the Server
npm start

application should run on this url:
http://localhost:3000

3.Testing
npm run test


4.Endpoints
endpoints should access by those urls:

ex for image resizing use this endpoint:
http://localhost:3000/resize?fname=fjord.jpg&width=300&height=250


ex for placeholder use this endpoint:
http://localhost:3000/placeholder?width=300&height=250&BGcolor=blue