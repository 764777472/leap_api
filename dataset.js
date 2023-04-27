/* eslint-disable no-console */
import pkg from 'pg';
const { Pool } = pkg;

const postgresPort = 5432
const maxConnections = 5
const pool = new Pool({
  user: process.env.DB_USER || 'hhb',
  host: process.env.DB_HOST || 'postgres://hhb:ITRReNanidHKazJiDvb4n02bys1WaGuV@dpg-ch57ktdgk4q8patoje3g-a.singapore-postgres.render.com/dialoguebot',
  database: process.env.DB_NAME || 'dialoguebot',
  password: process.env.DB_PASSWORD || 'ITRReNanidHKazJiDvb4n02bys1WaGuV',
  port: postgresPort,
  max: maxConnections,
  ssl: false,
})
console.log(pool)
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Unexpected error on idle client', err)
})

/**
 *
 */
export function shutdown() {
  pool.end()
}

/**
 *
 * @param _
 * @param response
 */
export function getUsers(_, response) {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

/**
 *
 * @param request
 * @param response
 */
export function getUserById(request, response) {
  const id = parseInt(request.params.id, 10)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

/**
 *
 * @param request
 * @param response
 */
export function createUser(request, response) {
  const { name, email } = request.body

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).json(result.rows)
    }
  )
}

/**
 *
 * @param request
 * @param response
 */
export function updateUser(request, response) {
  const id = parseInt(request.params.id, 10)
  const { name, email } = request.body
  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).json(result.rows)
    }
  )
}

/**
 *
 * @param request
 * @param response
 */
export function deleteUser(request, response) {
  const id = parseInt(request.params.id, 10)

  pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id], (error) => {
    if (error) {
      throw error
    }
    response.status(201)
  })
}