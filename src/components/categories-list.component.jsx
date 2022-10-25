import React from 'react';

const CategoriesList = () => {
    return (
        <div className='bg-yellow-500 h-[130vh] flex flex-col items-center justify-center border-4 border-black'>

            <h2 className="h-14 flex items-center justify-center bg-gray-500 border-4 border-black relative bottom-20">Coleccion</h2>

            <div className='bg-yellow-300 h-screen w-[80%]  mx-auto border-4 border-black grid md:grid-cols-2 gap-4 p-6'>
  

                <div className='bg-yellow-100 border-4 border-black flex items-center justify-center'>
                    <h3>Romana</h3>
                    <img/>
                </div>

                <div className='bg-yellow-100 border-4 border-black flex items-center justify-center'>
                    <h3>Nordica</h3>
                    <img/>
                </div>

                <div className='bg-yellow-100 border-4 border-black flex items-center justify-center'>
                    <h3>Oriental</h3>
                    <img/>
                </div>

                <div className='bg-yellow-100 border-4 border-black flex items-center justify-center'>
                    <h3>Anime</h3>
                    <img/>
                </div>
                
            </div>
        </div>
    );
};

export default CategoriesList;