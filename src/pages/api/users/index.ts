import { NextApiRequest, NextApiResponse } from 'next'

// Estratégia de autenticação => JWT (Storage), Next Auth (Social), Cognito, Auth0
 
export default (request: NextApiRequest, response: NextApiResponse) => {

	const users = [
		{ id: 1, name: 'Fulano' },
		{ id: 2, name: 'Ciclano' },
		{ id: 3, name: 'Beltrano' },
	]

	return response.json(users)
}