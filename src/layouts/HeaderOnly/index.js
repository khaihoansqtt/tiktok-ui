import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default DefaultLayout
