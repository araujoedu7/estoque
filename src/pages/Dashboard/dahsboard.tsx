import { useContext } from "react"
import { AuthUser } from "../../context/authContext"

export default function Dashboard() {

    const { authenticated, user } = useContext(AuthUser)

    return (
        <>
            {authenticated === true ? <h1>Bem vindo, {user?.name}!</h1> : <h1>Você não tem acesso.</h1>}
        </>
    )
}