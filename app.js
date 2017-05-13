import express from 'express'
import http from 'http'
import expressLayouts from 'express-ejs-layouts'
import bodyParser from 'body-parser'
import connection from './connection'

import homeRouter from './routes/home'
import restaurantRouter from './routes/restaurant'
import dishesRouter from './routes/dishes'

const app = express()

app.set('port', process.env.PORT || 8080)
app.set('views', __dirname + '/public')
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.json())
app.use(express.static('public'))

homeRouter(app)
restaurantRouter(app)
dishesRouter(app)

connection('mongodb://localhost/projeto-restaurante')

http.createServer(app).listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'))
})

export default app
