import { useContext } from "react";
import Aside from "../../components/Aside/aside";
import Header from "../../components/Header/header";
import { AuthUser } from "../../context/authContext";

export default function Dashboard() {

    const { user } = useContext(AuthUser)

    return (
        <div className="flex">
            {/* {authenticated === true ? <h1>Bem vindo, {user?.name}!</h1> : <h1>Você não tem acesso.</h1>} */}
            <Aside />
            <div className="w-full">
                <Header />
                <div className="p-[40px]">
                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-2xl">Bem-Vindo, {user?.name}</span>
                        <span className="text-zinc-400 text-xl">Overview</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}