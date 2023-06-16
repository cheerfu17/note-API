# API for notes. 
## Tools Used
This project use express.js framework and sqlite database.


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5050](http://localhost:5050) to send request to one of endpoints.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start`

Run the app normally

## Endpoints list:

### GET: /api/note - Get notes list
### GET: /api/note/:id - Get note by {id}
### POST: /api/note - Create note. Json params: title, body
### PATCH: /api/note - Change note by {id}. Json params: title, body
### DELETE: /api/note/:id - Delete note by {id}
