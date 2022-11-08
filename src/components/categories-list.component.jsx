import React from 'react';

const CategoriesList = () => {
    
    return (
        <div className='bg-[#EDF2F4] h-[150vh] grid md:grid-cols-2 md:grid-row-2 shadow-2xl'>

                <div className='bg-yellow-100 border-2 border-black flex items-center justify-center'>
                    <h3>Romana</h3>
                    <img/>
                </div>

                <div className='bg-yellow-100 border-2 border-black flex items-center justify-center'>
                    <h3>Nordica</h3>
                    <img/>
                </div>

                <div className='bg-yellow-100 border-2 border-black flex items-center justify-center'>
                    <h3>Oriental</h3>
                    <img/>
                </div>

                <div className='bg-yellow-100 border-2 border-black flex items-center justify-center'>
                    <h3>Anime</h3>
                    <img/>
                </div>
                
        </div>
    );
};

export default CategoriesList;