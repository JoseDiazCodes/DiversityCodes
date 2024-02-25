import { useState, useEffect } from "react"

const API_ROOT = "https://czi-covid-lypkrzry4q-uc.a.run.app/api"

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
