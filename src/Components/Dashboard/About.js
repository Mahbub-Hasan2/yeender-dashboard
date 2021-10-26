import React from 'react';
import { useForm } from "react-hook-form";

const About = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log("post", data);

    return (
        <div id="d_About_area">
            <h5 id="title">About of Yennder</h5>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">

                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example1"
                                className="form-control"
                                {...register("logo", { required: true })}
                            />
                            {errors.logo && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example1"><i className="fas fa-bullseye"></i> logo link</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example2"
                                className="form-control"
                                {...register("icon", { required: true })}
                            />
                            {errors.icon && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example2"><i className="fas fa-certificate"></i> icon Link</label>
                        </div>
                    </div>
                </div>

                {/* sosal link input  */}
                <div className="row mb-4">

                    {/* facebook link  */}
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example1"
                                className="form-control"
                                {...register("facebookLink", { required: true })}
                            />
                            {errors.facebookLink && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example1"> <i className="fab fa-facebook"></i> facebook link</label>
                        </div>
                    </div>

                    {/* twitter link  */}
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example2"
                                className="form-control"
                                {...register("twitterLink", { required: true })}
                            />
                            {errors.twitterLink && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example2"><i className="fab fa-twitter"></i> twitter link</label>
                        </div>
                    </div>
                </div>

                {/* Google link  */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example1"
                                className="form-control"
                                {...register("googleLink", { required: true })}
                            />
                            {errors.googleLink && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example1"><i className="fab fa-google"></i> Google link</label>
                        </div>
                    </div>

                    {/* instagram link  */}
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example2"
                                className="form-control"
                                {...register("instagramLink", { required: true })}
                            />
                            {errors.instagramLink && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example2"><i className="fab fa-instagram"></i> instagram link</label>
                        </div>
                    </div>
                </div>

                {/* linkedin link  */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example1"
                                className="form-control"
                                {...register("linkedinLink", { required: true })}
                            />
                            {errors.linkedinLink && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example1"><i className="fab fa-linkedin"></i> linkedin link</label>
                        </div>
                    </div>

                    {/* GitHube Link  */}
                    <div className="col">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form6Example2"
                                className="form-control"
                                {...register("gitHubeLink", { required: true })}
                            />
                            {errors.gitHubeLink && <span>This field is required</span>}
                            <label className="form-label" htmlFor="form6Example2"><i className="fab fa-github"></i> GitHube Link</label>
                        </div>
                    </div>
                </div>
                {/* sosal link input  */}


                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        id="form6Example3"
                        className="form-control"
                        {...register("metaTitle", { required: true })}
                    />
                    {errors.metaTitle && <span>This field is required</span>}
                    <label className="form-label" htmlFor="form6Example3"><i className="fas fa-align-left"></i> Meta title</label>
                </div>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        id="form6Example4"
                        className="form-control"
                        {...register("address", { required: true })}
                    />
                    {errors.address && <span>This field is required</span>}
                    <label className="form-label" htmlFor="form6Example4"><i className="fas fa-align-justify"></i> Address</label>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="form6Example5"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                    <label className="form-label" htmlFor="form6Example5"><i className="far fa-envelope"></i> Email</label>
                </div>

                {/* <!-- Number input --> */}
                <div className="form-outline mb-4">
                    <input
                        type="number"
                        id="form6Example6"
                        className="form-control"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <span>This field is required</span>}
                    <label className="form-label" htmlFor="form6Example6"><i className="fas fa-headphones"></i> Phone</label>
                </div>

                {/* <!-- Message input --> */}
                <div className="form-outline mb-4">
                    <textarea
                        className="form-control"
                        id="form6Example7"
                        rows="4"
                        {...register("additionalInformation", { required: true })}
                    ></textarea>
                    {errors.additionalInformation && <span>This field is required</span>}
                    <label className="form-label" htmlFor="form6Example7"><i className="fas fa-align-left"></i> Additional information</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form6Example8"
                        checked
                    />
                    <label className="form-check-label" htmlFor="form6Example8"> All okay - ✅ </label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Submit now</button>
            </form>
        </div>
    );
};

export default About;