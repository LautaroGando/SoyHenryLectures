const CardWithTailwind = () => {
    
    return (
        
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src="https://via.placeholder.com/300" alt="Placeholder" />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam vel ut perferendis harum cumque nemo illum impedit exercitationem hic aliquam molestias enim nihil ex tempora, modi voluptate. Nesciunt, incidunt?
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
            </div>
        </div>
        
    )
    
};

export default CardWithTailwind;