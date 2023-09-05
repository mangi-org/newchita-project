import { SingleChildrenProps } from "../interface"

function Main({ children }: SingleChildrenProps) {
    return (
        <main className="h-24 min-h-0 hover:min-h-full">
            {children}
        </main>
    )
}

export default Main