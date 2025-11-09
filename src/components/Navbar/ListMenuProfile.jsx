import { MdLogout } from "react-icons/md";

function ListMenuProfile() {
    return (
        <div className="absolute -right-4 mt-6 w-screen sm:right-0 sm:mt-3 sm:w-48  bg-white shadow-lg  py-2 border border-gray-100 z-10">
            <a
                href="#"
                className="block px-4 py-2 text-base text-black-secondary hover:bg-gray-100"
            >
                Profil Saya
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-base text-black-secondary hover:bg-gray-100"
            >
                Kelas Saya
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-base text-black-secondary hover:bg-gray-100"
            >
                Pesanan Saya
            </a>
            <button
                className="w-full gap-1 flex text-left items-center px-4 py-2 text-error-default hover:bg-red-50"
            >
                Keluar <MdLogout size={20} />
            </button>
        </div>
    )
}

export default ListMenuProfile