import colorProject from "./interface"

/**
 * Detects the background color based on the given color.
 *
 * @param {colorProject | string} color - The color to detect the background color for.
 * @return {string} The corresponding background color class.
 */
function detectBgColor (color: colorProject | string): string{
    switch (color){
        case colorProject.Yellow:
            return 'bg-yellow-500'
        case colorProject.Red:
            return 'bg-red-500'
        case colorProject.Green:
            return 'bg-green-500'
        case colorProject.Fuchsia:
            return 'bg-fuchsia-500'
        case colorProject.Black:
            return 'bg-black-500'
        default:
            return 'bg-yellow-500'
    }
}

export default detectBgColor