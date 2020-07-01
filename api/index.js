import express from 'express'

const users =
[{"login":"jsouthern0","username":"Johna","email":"jmaccoveney0@miibeian.gov.cn","photo":"https://picsum.photos/500/500?image=40","password":"wymsf53"},
{"login":"broxburch1","username":"Berna","email":"bcosins1@flavors.me","photo":"https://picsum.photos/500/500?image=41","password":"iDBYvAIBT1co"},
{"login":"ybeaze2","username":"Yancy","email":"ygrealy2@ebay.co.uk","photo":"https://picsum.photos/500/500?image=42","password":"Q2ZG4uv7"},
{"login":"csandom3","username":"Cilka","email":"cmoss3@icq.com","photo":"https://picsum.photos/500/500?image=43","password":"m64fK1L"},
{"login":"jtimlin4","username":"Joyce","email":"jweigh4@cafepress.com","photo":"https://picsum.photos/500/500?image=44","password":"fxsJuB1"}]

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  users.forEach(function(user){
    if (user.login === req.body.login && user.password === req.body.password){
      req.session.authUser = {username: user.username, email: user.email, photo: user.photo}
      return res.json({username: user.username, email: user.email, photo: user.photo})
    }
  })
  res.status(401).json({ message: 'Неверное имя пользователя или пароль' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
