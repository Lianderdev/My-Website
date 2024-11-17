import soon from "../../assets/img/logo.png"


export function Soon() {
    return (
        <div className='font-extrabold w-8 h-8 flex justify-between items-center rounded-lg border-2 border-white p-1'>
            <img src={soon} alt="logo do liander" />
        </div>
    )
}