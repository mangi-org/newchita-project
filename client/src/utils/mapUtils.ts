/**
 * Clears the storage of the map navigation data.
 *
 * @return {null} Returns null.
 */
const clearMapStorage = () => {
    localStorage.removeItem('mapNavigate')
    return null
}

export { clearMapStorage };