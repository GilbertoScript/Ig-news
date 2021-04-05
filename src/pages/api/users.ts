import { NextApiRequest, NextApiResponse } from 'next'
 
export default (request: NextApiRequest, response: NextApiResponse) => {

	const users = [
		{ id: 1, name: 'Fulano' },
		{ id: 2, name: 'Ciclano' },
		{ id: 3, name: 'Beltrano' },
	]

	return response.json(users)
}