import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { SingleChildrenProps } from "../interface"

function Layout({ children }: SingleChildrenProps) {
    return (
        <div className="min-h-screen">
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    )
}

export default Layout