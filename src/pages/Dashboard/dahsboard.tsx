import { useContext } from "react";
import Aside from "../../components/Aside/aside";
import Header from "../../components/Header/header";
import { AuthUser } from "../../context/authContext";
import componente_img from "../../assets/estoque.png";
import computador_img from "../../assets/computador_icon.png";
import notebook_img from "../../assets/notebook_icon.png";
import cabos_img from "../../assets/cabos_icon.png";
import materiais_img from "../../assets/materiais_icon.png";


export default function Dashboard() {

    const { user } = useContext(AuthUser);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* {authenticated === true ? <h1>Bem vindo, {user?.name}!</h1> : <h1>Você não tem acesso.</h1>} */}
            <Aside />
            <div className="w-full">
                <Header />
                <div className="p-[10px] sm:p-[40px] bg-slate-100 h-customHeight overflow-auto">
                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-2xl">Bem-Vindo, {user?.name}</span>
                        <span className="text-zinc-400 text-xl">Overview</span>
                    </div>
                    <div className="mt-[35px]">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="flex items-center w-full bg-white p-6 rounded-[20px] gap-5">
                                <img src={componente_img} alt="componente_img" />
                                <div className="flex flex-col">
                                    <span className="text-greenAFS-100 text-xl">Componentes</span>
                                    <span className="text-2xl font-semibold">10</span>
                                </div>
                            </div>
                            <div className="flex items-center w-full bg-white p-5 rounded-[20px] gap-5">
                                <img src={computador_img} alt="computador_img" />
                                <div className="flex flex-col">
                                    <span className="text-greenAFS-100 text-xl">Computador</span>
                                    <span className="text-2xl font-semibold">8</span>
                                </div>
                            </div>
                            <div className="flex items-center w-full bg-white p-5 rounded-[20px] gap-5">
                                <img src={notebook_img} alt="notebook_img" />
                                <div className="flex flex-col">
                                    <span className="text-greenAFS-100 text-xl">Notebook</span>
                                    <span className="text-2xl font-semibold">15</span>
                                </div>
                            </div>
                            <div className="flex items-center w-full bg-white p-5 rounded-[20px] gap-5">
                                <img src={materiais_img} alt="materiais_img" />
                                <div className="flex flex-col">
                                    <span className="text-greenAFS-100 text-xl">Materiais</span>
                                    <span className="text-2xl font-semibold">7</span>
                                </div>
                            </div>
                            <div className="flex items-center w-full bg-white p-5 rounded-[20px] gap-5">
                                <img src={cabos_img} alt="cabos_img" />
                                <div className="flex flex-col">
                                    <span className="text-greenAFS-100 text-xl">Cabos</span>
                                    <span className="text-2xl font-semibold">9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}