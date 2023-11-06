

const Hero = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero h-[450px] bg-base-200">
                    <div className="flex col-span-2 items-center pl-10 pr-10 gap-10">
                        <img src="https://i.ibb.co/0FgjNWc/nice.jpg" className="max-w-sm h-96 w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Indian breakfast Raks Kitchen</h1>
                            <p className="py-6 w-[620px]">Dosa. This crisp, silky pancake is made from rice batter that is served with sambar and chutneys. ...</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero h-[450px] bg-base-200">
                    <div className="flex col-span-2 items-center pl-10 pr-10 gap-10">
                        <img src="https://i.ibb.co/gJ7zhZn/1.jpg" className="max-w-sm h-96 w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Indian breakfast Raks Kitchen</h1>
                            <p className="py-6 w-[620px]">Dosa. This crisp, silky pancake is made from rice batter that is served with sambar and chutneys. ...</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero h-[450px] bg-base-200">
                    <div className="flex col-span-2 items-center pl-10 pr-10 gap-10">
                        <img src="https://i.ibb.co/9rsrBTy/2.jpg" className="max-w-sm h-96 w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Indian breakfast Raks Kitchen</h1>
                            <p className="py-6 w-[620px]">Dosa. This crisp, silky pancake is made from rice batter that is served with sambar and chutneys. ...</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero h-[450px] bg-base-200">
                    <div className="flex col-span-2 items-center pl-10 pr-10 gap-10">
                        <img src="https://i.ibb.co/8ckfKN5/3.jpg" className="max-w-sm h-96 w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Indian breakfast Raks Kitchen</h1>
                            <p className="py-6 w-[620px]">Dosa. This crisp, silky pancake is made from rice batter that is served with sambar and chutneys. ...</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;