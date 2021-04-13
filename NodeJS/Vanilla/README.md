# Vanilla JS

### Setup

- run `npm start` to run the server
- run `npm run dev` to run start server in development

### Routes

- GET
    - get all breeds - /api/breeds
        - request url
        ```http
        http://localhost:3000/api/breeds
        ```
    - get a single breed by id - /api/breeds/id
        - request url
        ```http
        http://localhost:3000/api/breeds/1
        ```
- POST
    - add a new breed - /api/breeds
        - request url
        ```http
        http://localhost:3000/api/breeds
        ```
        - request body should be in JSON format containing below values
        ```json
        {
            "breedName": "Breed 1",
            "info": "Info 1"
        }
        ```
- PUT
    - update an existing breed - /api/breeds/id
        - request url
        ```http
        http://localhost:3000/api/breeds/1
        ```
        - request body should be in JSON format and can contain one or more of the initial values
        ```json
        {
            "breedName": "Updated Breed 1"
        }
        ```
- DELETE
    - delete a breed - /api/breeds/id
        - request url
        ```http
        http://localhost:3000/api/breeds/1
        ```