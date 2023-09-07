import { AboutProjectAPI } from "./interface"
import { getApiURL } from "../config"

async function getArrayAboutProject(): Promise<AboutProjectAPI[]> {
    const response = await fetch(getApiURL() + 'about/')
    const data = await response.json()
    return data
}

async function getSingleAboutProject(index: number): Promise<AboutProjectAPI> {
    const response = await fetch(getApiURL() + `about/${index}`)
    const data = await response.json()
    return data
}


export { getArrayAboutProject, getSingleAboutProject}