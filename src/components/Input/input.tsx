import {JSX} from "react";

interface Input {
    type: string;
    placeholder: string;
    className: string;
}

export default function Input(props:Input): JSX.Element {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} className={`
                max-w-[430px] w-full ${props.className}
                outline-none
            `}/>
        </>
    )
}