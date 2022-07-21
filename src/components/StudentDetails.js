import React from 'react';
import { useForm } from 'react-hook-form';

const StudentDetails = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className='w-8/12 mx-auto flex items-center justify-center min-h-screen my-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-2xl font-bold text-center mb-12'>Place Your Details Here</h3>
                <div className='flex md:flex-row md:gap-5 flex-col'>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="name">Your Name</label>
                        <input type="text" name='name' className="w-[400px] input input-bordered  max-w-xs" {...register("name", { required: true })} />
                        {errors.name?.type === 'required' && <span className='text-red-500'>Name is required</span>}
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="gurdianname">Your Gurdian Name</label>
                        <input type="number" name='gurdianname' className="w-[400px] input input-bordered  max-w-xs" {...register("gurdianname", { required: true })} />
                        {errors.gurdianname?.type === 'required' && <span className='text-red-500'>Gurdian Name is required</span>}
                    </div>
                </div>
                <div className='flex md:flex-row md:gap-5 flex-col'>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="email">Your Email</label>
                        <input type="number" name='email' className="w-[400px] input input-bordered  max-w-xs" {...register("email", { required: true })} />
                        {errors.email?.type === 'required' && <span className='text-red-500'>Email is required</span>}
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="age">Your Age</label>
                        <input type="number" name='age' className="w-[400px] input input-bordered  max-w-xs" {...register("age", { required: true })} />
                        {errors.age?.type === 'required' && <span className='text-red-500'>Age is required</span>}
                    </div>
                </div>
                <div className='flex md:flex-row md:gap-5 flex-col'>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="phone">Your Phone</label>
                        <input type="number" name='phone' className="w-[400px] input input-bordered  max-w-xs" {...register("phone", { required: true })} />
                        {errors.phone?.type === 'required' && <span className='text-red-500'>Phone Number is required</span>}
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="gender">Gender</label>
                        <input type="text" name='gender' className="w-[400px] input input-bordered  max-w-xs" {...register("gender", { required: true })} />
                        {errors.gender?.type === 'required' && <span className='text-red-500'>Gender is required</span>}
                    </div>

                </div>
                <div className="flex md:flex-row md:gap-5 flex-col">
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="address">Your Address</label>
                        <input type="text" name='address' className="w-[400px] input input-bordered  max-w-xs" {...register("address", { required: true })} />
                        {errors.address?.type === 'required' && <span className='text-red-500'>Address is required</span>}
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="place">Your Place</label>
                        <input type="text" name='place' className="w-[400px] input input-bordered  max-w-xs" {...register("place", { required: true })} />
                        {errors.place?.type === 'required' && <span className='text-red-500'>Place is required</span>}
                    </div>


                </div>

                <div className='flex justify-between items-center gap-5'>
                    <input type="submit" className='btn btn-accent w-auto md:w-[150px]' value="Add Students" />
                    <button className="btn btn-sedondary w-auto md:w-[150px]">Edit Data</button>
                    <button style={{ backgroundColor: "red" }} className="btn btn-primary w-auto md:w-[150px]">Delete</button>
                </div>

            </form>
        </div>
    );
};

export default StudentDetails;