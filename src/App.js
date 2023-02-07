import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from '~//layouts'
import publicRoutes from '~/routes/routes'

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout || DefaultLayout
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.element />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </Router>
    )
}

export default App
