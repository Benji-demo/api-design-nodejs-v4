import * as user from '../user'

describe('user handler', () => {
    it('should do Create a new user', async () => {
        const req = {body: {username: "test", password: "pass"}}
        const res = {json({token}){
            expect(token).toBeDefined()
        }
    }


        await user.createNewUser(req, res, () => {})

    })
})
