

const AddFood = () => {

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const foodname = form.foodname.value;
        const profileimg = form.profileimg.value;
        const profilename = form.profilename.value;
        const peopleeat = form.peopleeat.value;
        const location = form.location.value;
        const expratedate = form.expratedate.value;
        const details = form.details.value;

        const newFood = {image, foodname, profileimg, profilename, peopleeat, location, expratedate, details}
        console.log(newFood);
    }

    return (
        <form onSubmit={handleAddFood}>
            <div>
                <div className="flex w-full gap-8 pt-6 pl-14 pr-14">
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Add Image</span>
                        </label>
                        <label className="input-group">
                            <input type="name" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodname" placeholder="foodname" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex w-full gap-8 pt-6 pl-14 pr-14">
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Profile Img</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="profileimg" placeholder="profileimg" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Profile Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="profilename" placeholder="profilename" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex w-full gap-8 pt-6 pl-14 pr-14">
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">How many people can eat</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="peopleeat" placeholder="people can eat" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex w-full gap-8 pt-6 pl-14 pr-14">
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Expredate</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="expratedate" placeholder="expratedate" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-[500px]">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="p-14">
                    <button className="p-4 bg-red-600 rounded text-white w-full">Add Food On Cards</button>
                </div>
            </div>
        </form>
    );
};

export default AddFood;