import {LogoIconDollar} from "../icons/icons";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-gray-800 text-white h-14 flex items-center">
            <div className="wrapper-container w-full">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
                    <LogoIconDollar />
                    <p className="font-semibold"><span className="text-yellow-500">D</span>enis<span className="text-yellow-500">H</span>ave<span className="text-yellow-500">C</span>ap</p>
                    <div className="ml-40 border-2 border-sky-500 rounded p-2">
                        Тут можно вставить ссылку для перехода на страницу где ты будешь считать по формуле
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;