import fullLogo from "../../../public/logoV2.png"
import Image from "next/image"

export default function Page() {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div className="flex justify-center">
            <div className="w-5/6 bg-white">
                <div className="p-5">
                <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-center">About us</h1>
                
                {/* Mobile */}
                <div className="sm:hidden">
                    <Image
                        className="w-80 justify-self-center"
                        src={fullLogo}
                        alt="Sun and Mountains" 
                    />
                    <p>{content}</p>
                </div>
                
                {/* Desktop */}
                <div className="hidden sm:block">
                    <Image
                        className="w-80 float-right"
                        src={fullLogo}
                        alt="Sun and Mountains" 
                    />
                    <p>{content}</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}