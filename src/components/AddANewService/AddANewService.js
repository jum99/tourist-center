import React from "react";
import axios from "axios";
import "./AddANewService.css";
import { useForm } from "react-hook-form";

const AddANewService = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios
            .post("https://tourist-center-server.up.railway.app/addResorts", data)
            .then((result) => {
                if (result.data.insertedId) {
                    alert("Successfully Added");
                    reset();
                }
            });
    };
    window.scroll(0, 0);
    return (
        <div className="add-resort-container">
            <h1
                style={{ color: 'mediumseagreen' }} className="text-center">Add Resorts</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="Resort Name"
                    className="border-0 field"
                />

                <input
                    {...register("area", { required: true })}
                    placeholder="Resort Area"
                    className="border-0 field"
                />
                <input
                    {...register("booked", { required: true })}
                    placeholder="Total Booked"
                    className="border-0 field"
                />
                <textarea
                    className="mt-3 border-0 field"
                    {...register("description", { required: true })}
                    placeholder="About Resort"
                />
                <input
                    {...register("image", { required: true })}
                    placeholder="Resort Image"
                    className="border-0 field"
                />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add Resort" className="border-0 field" disabled />
            </form>
        </div>
    );
};

export default AddANewService;
