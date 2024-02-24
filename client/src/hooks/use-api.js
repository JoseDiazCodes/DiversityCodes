import { useState, useEffect } from "react"

const API_ROOT = "https://czi-covid-lypkrzry4q-uc.a.run.app/api"
// const API_ROOT = "http://localhost:9000/api" // replace with your API's base URL

export function useApi({ path } = { path: "" }) {
	const [response, setResponse] = useState()
	const [error, setError] = useState()

	useEffect(() => {
		fetch(`${API_ROOT}/${path}`)
			.then((res) => res.json())
			.then((res) => setResponse(res))
			.catch((err) => setError(err))
	}, [])

	return {
		response,
		error,
	}
}
