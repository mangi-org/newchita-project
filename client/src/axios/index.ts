import { AboutProjectAPI } from "./interface"

async function getArrayAboutProject(): Promise<AboutProjectAPI[]> {
    const response = await fetch(import.meta.env.VITE_API_REST_URL + 'about/')
    const data = await response.json()
    return data
}

async function getSingleAboutProject(index: number): Promise<AboutProjectAPI> {
    const response = await fetch(import.meta.env.VITE_API_REST_URL + `about/${index}`)
    const data = await response.json()
    return data
}


export { getArrayAboutProject, getSingleAboutProject}