import { AiTwotoneStar } from 'react-icons/Ai';


const Extra2section = () => {
    return (
        <div>
            <div className="hero p-12  h-[528px] bg-base-200">
                <div className=" flex items-center  flex-row-reverse">
                    <img src="https://i.ibb.co/c60FwVx/wow.jpg" className="max-w-sm h-[420px] rounded-lg shadow-2xl" />
                    <div className="w-[720px] pr-20">
                        <p className="text-xl text-red-600 font-bold pb-2">Delivery</p>
                        <h1 className="text-5xl font-bold">A Moments of Delivered <span className="text-red-600">On Right Time & Place</span></h1>
                        <p className="py-6">Food Khan is restaurant, bar and coffee roastery located on a bysy corner site in Farringdon s Exmount Market. EWith glazed frontege on two sides of the building, overlooking the market nad a bustling london inteon.</p>
                        <button className="items-center bg-red-500 text-white p-3 pl-[40px] pr-[40px] rounded-lg">Show All Buttons</button>
                    </div>
                </div>
            </div>

            <div className='text-center pt-24'>
                <h1 className='font-bold text-xl text-red-600'>Testimonial</h1>
                <h1 className='text-5xl font-bold'>Client <span className='text-red-500'>Feedback</span></h1>
            </div>

            <div className="flex p-12 col-span-2 pt-10">
                <div className='border p-10 '>
                    <div className='flex gap-4'>
                        <img className='w-16 h-16 rounded-full' src="https://i.ibb.co/c60FwVx/wow.jpg" alt="" />
                        <div>
                            <h1 className='font-bold'>Christ Deo</h1>
                            <h1>CEO A4Tech Ltd.</h1>
                            <div className='flex pt-1 text-red-500'>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                            </div>
                        </div>
                    </div>
                    <p className='w-[500px] pt-3'>
                        The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement
                    </p>
                </div>
                <div className='border p-10 pl-24'>
                    <div className='flex gap-4'>
                        <img className='w-16 h-16 rounded-full' src="https://i.ibb.co/c60FwVx/wow.jpg" alt="" />
                        <div>
                            <h1 className='font-bold'>Christ Deo</h1>
                            <h1>CEO A4Tech Ltd.</h1>
                            <div className='flex pt-1 text-red-500'>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                                <AiTwotoneStar></AiTwotoneStar>
                            </div>
                        </div>
                    </div>
                    <p className='w-[500px] pt-3'>
                        The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Extra2section;