import BallonCardInterface from "./interface"
import './BallonCard.css'

function BallonCard({ item }: BallonCardInterface) {


    let classColorButton: string;

    let bgColor: string;
    

    switch (item.color) {
        case '#d22115':
            bgColor = 'bg-red-500';
            classColorButton = bgColor+' border-red-500 transition-all hover:text-red-500';
            break;
        case '#9acd32':
            bgColor = 'bg-green-500';
            classColorButton = bgColor+' border-green-500 transition-all hover:text-green-500';
            break;
        case '#fdba2c':
            bgColor = 'bg-yellow-500';
            classColorButton = bgColor+' border-yellow-500 transition-all hover:text-yellow-500';
            break;
        case '#a630a2':
            bgColor = 'bg-fuchsia-500';
            classColorButton = bgColor+' border-fuchsia-500 transition-all hover:text-fuchsia-500';
            break;
        case '#1d1d1b':
            bgColor = 'bg-black-500';
            classColorButton = bgColor+' border-black transition-all hover:text-black-500';
            break;
        default:
            bgColor = 'bg-yellow-500';
            classColorButton = bgColor+' border-yellow-500 transition-all hover:text-yellow-500';
    }

    const handleButtonClick = `const eventJson = { event: 'navigate', data: { url: 'about/` +
        item.id +
        `'} }; localStorage.setItem('mapNavigate', JSON.stringify(eventJson));`

    const smallDescription = item.description.length > 100 ? item.description.substr(0, 100) + '...' : item.description

    return `
        <div class="flex flex-row gap-1 ${bgColor}">
            <div class="flex-start bg-white pr-4">
                <img src=${item.image} alt=${item.title} class="w-24 max-w-sm" />
            </div>
            <div class="flex flex-col w-full bg-white pl-4">
                <h2>${item.title}</h2>
                <p>${item.address}</p>
                <hr />
                <p>${smallDescription}</p>
                <button 
                    class="w-24 h-8 flex items-center justify-center self-center rounded text-white hover:bg-white border-solid border-2 ${classColorButton}" 
                    onclick="${handleButtonClick}"
                >Подробнее</button>
                </div>  
        </div>
    `
}

export default BallonCard