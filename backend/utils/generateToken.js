import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'Secret', {
    expiresIn: '30d',   
  })
}

export default generateToken
