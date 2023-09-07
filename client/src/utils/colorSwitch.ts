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

/**
 * Detects the border color based on the input color.
 *
 * @param {colorProject | string} color - The color input to be detected.
 * @return {string} The corresponding border color class.
 */
function detectBorderColor (color: colorProject | string): string{
    switch (color){
        case colorProject.Yellow:
            return 'border-yellow-500 transition-all hover:text-yellow-500'
        case colorProject.Red:
            return 'border-red-500 transition-all hover:text-red-500'
        case colorProject.Green:
            return 'border-green-500 transition-all hover:text-green-500'
        case colorProject.Fuchsia:
            return 'border-fuchsia-500 transition-all hover:text-fuchsia-500'
        case colorProject.Black:
            return 'border-black-500 transition-all hover:text-black-500'
        default:
            return 'border-yellow-500 transition-all hover:text-yellow-500'
    }
}

export {detectBgColor, detectBorderColor}