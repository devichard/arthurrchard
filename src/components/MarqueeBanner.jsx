

const MarqueeBanner = () => {
    const textContent = (
        <span className="flex items-center whitespace-nowrap text-xl md:text-1xl font-bold tracking-tight text-black">
            <i className='bx bx-minus text-4xl mx-4'></i> 
            MAIOR TAXA DE APROVAÇÃO PARA OTIMIZAR SEUS LUCROS!
        </span>
    );

    
    const repeatedContent = Array(10).fill(textContent);

    return (
        <div className="bg-gradient-to-r from-[#7ebc45] to-[#123e0f] py-4 overflow-hidden">
            <div className="flex animate-marquee-move">
                {repeatedContent.map((content, index) => (
                    <div key={index} className="flex-shrink-0">
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeBanner;