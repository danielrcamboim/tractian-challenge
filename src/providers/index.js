import { AssetsProvider } from "./assets"
import { UnitsProvider } from "./units"
import { UsersProvider } from "./users"
import { CompaniesProvider } from "./companies"

const Providers = ({ children }) => {
    return(
        <AssetsProvider>
            <UnitsProvider>
                <UsersProvider>
                    <CompaniesProvider>
                        {children}
                    </CompaniesProvider>
                </UsersProvider>
            </UnitsProvider>
        </AssetsProvider>
    )
}

export default Providers