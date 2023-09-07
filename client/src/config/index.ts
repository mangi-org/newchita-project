const getApiURL = (): string => {
    const result = import.meta.env.VITE_API_URL + ":" + import.meta.env.VITE_API_PORT + "/api/v1/"
    const ssl = import.meta.env.VITE_SSL === "true" ? true : false
    if (ssl) {
        return "https://" + result
    }
    return "http://" + result
}

export { getApiURL }