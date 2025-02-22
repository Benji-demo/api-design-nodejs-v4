import app from '../server'
import superTest from 'supertest'


describe('routes', () => {
    let request: any
    beforeAll(() => {
        request = superTest(app)
    })
    it('should return 200', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
    })
    it('should return 401', async () => {
        const response = await request.get('/api')
        expect(response.status).toBe(401)
    })
    it('should return 400', async () => {
        const response = await request.post('/user')
        expect(response.status).toBe(400)
    })

    it('should return 401', async () => {
        const res = await superTest(app)
        .post('/signin')
        .send({username: "Shiroe", password: "dfd"})
        expect(res.status).toBe(401)
    })
})