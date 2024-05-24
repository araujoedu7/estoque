import { JSX, useState } from "react";
import logo_afs from '../../assets/logo_afs.png'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Input from "../../components/Input/input.tsx";

export default function Login(): JSX.Element {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="sm:flex">
            <div className="hidden sm:flex max-w-[864px] w-full h-screen bg-bgLogin bg-cover bg-center"></div>
            <div className="w-full flex justify-center h-screen items-center">
                <div className="w-full lg:ml-[75px]">
                    <div className="w-full flex">
                        <img src={logo_afs} alt="logo AFS" className="max-w-[278px] m-full p-3" />
                    </div>
                    <form className="w-full mt-[83px] flex flex-col gap-[60px] p-3">
                        <div className="w-full">
                            <Input
                                className="p-2 border-b border-black"
                                placeholder="Usuário"
                                type="text"
                            />
                        </div>
                        <div className="w-full">
                            <div className="max-w-[430px] flex items-center p-2 border-b border-black gap-3">
                                <Input
                                    className="border-r border-zinc-500"
                                    placeholder="Senha"
                                    type={showPassword ? 'password' : 'text'}
                                />
                                <div className="w-[24px] cursor-pointer" onClick={handleShowPassword}>
                                    {showPassword ? <EyeIcon /> : <EyeSlashIcon/>}
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-8">
                            <button className="text-[20px] font-bold max-w-[430px] w-full text-white bg-greenAFS-200 py-2 rounded-xl">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}