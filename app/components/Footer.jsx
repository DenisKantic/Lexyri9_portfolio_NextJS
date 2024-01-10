export default function Footer(){
    return (
        <div className="w-full bg-gray-400 flex justify-center items-center xxs:h-[6vh] sm:h-[5vh]
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#000D2E] to-[#000D2E]">
            <div className="mx-auto text-white xxs:text-sm sm:text-lg text-center">
                <h1>Created and Designed by 
                    <a href="https://www.linkedin.com/in/denis-kantic/" 
                    className="underline pl-2" target="_blank">
                         Denis</a> & 
                        <a href="https://www.linkedin.com/in/hamza-paldum/" 
                        className="underline pl-2"
                        target="_blank"
                        >
                            Hamza</a> 	&#169; 2024</h1>
            </div>
        </div>
    )
}