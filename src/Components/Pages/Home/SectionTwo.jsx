

const SectionTwo = () => {
    return (
        <div>
            <div className="p-24">
            <h1 className="text-4xl font-bold text-center">Popular Food for you!.</h1>
            <div className="pt-12">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-52" src="https://i.ibb.co/8ckfKN5/3.jpg" alt="Shoes" /></figure>

                    <div className="flex  items-center w-full justify-between pl-5 pr-5 pt-4">
                        <h1 className="text-xl font-bold">Food Name </h1>
                        <p>Exprate Date</p>
                    </div>
                    <div className="flex  items-center gap-3 pl-5 pr-5 pt-2">
                        <img className="w-10 rounded-full h-10" src="https://i.ibb.co/8ckfKN5/3.jpg" alt="" />
                        <p className="text-xl">Safayet</p>
                    </div>
                    <div className="flex  items-center w-full justify-between pl-5 pr-5 pt-1">
                        <h1 className="text-xl font-bold">koto jon khiteparbe </h1>
                        <p>location</p>
                    </div>
                    <div className="  items-center pl-5 pr-5 pt-2">
                        <p>Lorem ipsum dolor sit amet consectetur  elit. Maxime, consequuntur </p>
                    </div>
                    <div className="card-actions justify-center pb-6 pt-4">
                        <button className="bg-blue-600 text-white p-3 pl-[140px] pr-[140px] rounded-lg">Details</button>
                    </div>
                </div>
            </div>
        </div>

       <div className="text-center pb-24">
       <button className="items-center bg-blue-600 text-white p-3 pl-[140px] pr-[140px] rounded-lg">Show All Buttons</button>
       </div>

        </div>
        

    );
};

export default SectionTwo;