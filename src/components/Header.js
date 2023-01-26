import Nav from "./Nav";
import Image from 'next/image';

const Header = () => {
	return (
		<div className="header">
        
            <div className="w-full h-14 bg-black">
            
                <div className="container mx-auto">
            
                    <p className="text-white" style={{ padding: "15px 0", fontWeight: "bold" }}>
                    
                        Thu. Jan 26th, 2023 
                    
                    </p>
                
                </div>
            
            </div>
            
            <div style={{position: "relative", margin: "0 0 -7px 0"}}>
            
                <Image

                  src="/splash__sized.png"
                  alt="Picture of the author"
                  width={1600}
                  height={500}
                  
                />
            
            </div>
        
			<Nav/>
		</div>
	)
};

export default Header;
