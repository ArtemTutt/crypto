import {LogoIconDollar} from "../icons/icons";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-gray-800 text-white h-14 flex items-center mb-4">
            <div className="wrapper-container w-full">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
                    <LogoIconDollar />
                    <p className="font-semibold"><span className="text-yellow-500">D</span>enis<span className="text-yellow-500">H</span>ave<span className="text-yellow-500">C</span>ap</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;