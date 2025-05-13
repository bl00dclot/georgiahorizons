import * as React from 'react';
interface PageWrapProps{
    children: React.ReactNode;
}

const PageWrap:React.FC<PageWrapProps> = ({ children }) => {
    return (
        <div className="flex justify-center pt-16">
            <div className="w-5/6 bg-white">
                <div className="p-5">
                    <div className="border-b border-gray-900/10 pb-12">  
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageWrap;