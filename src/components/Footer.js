import Link from 'next/link';
import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-black p-6 text-white">
		<div className="container mx-auto">

			<div className="footer-text flex-none md:flex items-center justify-between">
				<p>© Nyxon Haircare 2023</p>
            </div>  

			<ul className="social-links mt-8 flex align-center">
				<li><a href="https://www.facebook.com/codeytek" className="fa fa-facebook" target="_blank"><Facebook/></a></li>
				<li className="ml-2 mt-1"><a href="https://twitter.com/codeytek" target="_blank"><Twitter/></a></li>
				<li className="ml-2 mt-1"><a href="https://youtube.com/ImranSayedDev" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				<li className="ml-2"><a href="https://www.instagram.com/codeytek_academy/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
			</ul>
            
            
            
            
            
            <div className="text-sm font-medium uppercase lg:flex-grow"  style={{ position: "relative" }}>
            
                <div className="footer-text flex-none md:flex items-center justify-between">

                    <p className="mt-8">49 Peckham High Road, SE15 5EB</p>
                    <p className="text-gray mt-8"></p>                

                

                    
                    
                    <ul className="social-links mt-8 flex align-center">
                        <li>
                        
                            <Link href="/categories">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                                    Categories
                                </a>
                            </Link>

                        </li>
                        <li className="ml-2 mt-1">
                        
                            <Link href="/">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                                    Women
                                </a>
                            </Link>
          
                        </li>
                        
                        <li className="ml-2 mt-1">
                        
                            <Link href="/">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                                    Kids
                                </a>
                            </Link>
          
                        </li>                
                        
                        <li className="ml-2 mt-1">
                        
                            <Link href="/">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                                    Home & Living
                                </a>
                            </Link>
          
                        </li>                
                        
                        <li className="ml-2 mt-1">
                            
                            <Link href="/">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                                    Offers
                                </a>
                            </Link>
          
                        </li>                
                      

                    </ul>            

      
                </div>            

                
            </div>    
            
		</div>
        
	</div>
);

export default Footer;
