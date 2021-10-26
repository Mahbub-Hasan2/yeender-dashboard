import React from 'react';
import { useForm } from "react-hook-form";

const UpdateService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmitUpdateService = data => console.log("update", data);

    return (
        <div>
            {/* <!-- update service Button trigger modal --> */}
            <button
                type="button"
                className="btn btn-primary btn-rounded"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
            >
                Update
            </button>
            {/* <!-- update service Button trigger modal --> */}

            {/* <!-- update service Modal --> */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <form onSubmit={handleSubmit(onSubmitUpdateService)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-mdb-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">

                                {/* Modal inputs  */}

                                <div className="form-outline">
                                    <input
                                        type="url"
                                        id="typeURL"
                                        className="form-control"
                                        {...register("img", { required: true })}
                                    />
                                    {errors.img && <span>This field is required</span>}
                                    <label className="form-label" htmlFor="typeURL">URL input</label>
                                </div>

                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="typeText"
                                        className="form-control"
                                        {...register("title", { required: true })}
                                    />
                                    {errors.title && <span>This field is required</span>}
                                    <label className="form-label" htmlFor="typeText">Text input</label>
                                </div>

                                <div className="form-outline">
                                    <textarea
                                        className="form-control"
                                        id="textAreaExample"
                                        rows="4"
                                        {...register("description", { required: true })}
                                    ></textarea>
                                    {errors.description && <span>This field is required</span>}
                                    <label className="form-label" htmlFor="textAreaExample">Message</label>
                                </div>

                                {/* Modal inputs  */}

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- update service Modal --> */}
        </div>
    );
};

export default UpdateService;