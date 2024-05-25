import { useContext } from "react";
import Aside from "../../components/Aside/aside";
import Header from "../../components/Header/header";
import { AuthUser } from "../../context/authContext";
import componente_img from "../../assets/estoque.png";

export default function Dashboard() {

    const { user } = useContext(AuthUser);

    return (
        <div className="flex">
            {/* {authenticated === true ? <h1>Bem vindo, {user?.name}!</h1> : <h1>Você não tem acesso.</h1>} */}
            <Aside />
            <div className="w-full">
                <Header />
                <div className="p-[40px] bg-slate-100">
                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-2xl">Bem-Vindo, {user?.name}</span>
                        <span className="text-zinc-400 text-xl">Overview</span>
                    </div>
                    <div>
                        <div>
                            <div className="flex items-center max-w-[260px] w-full">
                                <img src={componente_img} alt="" />
                                <div className="flex flex-col">
                                    <span className="text-greenAFS-100 text-xl">Componentes</span>
                                    <span className="text-2xl font-semibold">10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}