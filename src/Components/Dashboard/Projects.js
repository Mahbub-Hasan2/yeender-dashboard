import React from 'react';
import { useForm } from "react-hook-form";
import PostProject from './Modals/PostProject';
import UpdateProject from './Modals/UpdateProject';


const Projects = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmitUpdateProject = data => console.log("update", data);
    const onSubmitPostProject = data => console.log("post", data);

    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div id="dashboard_projects_pa">
            <h4 className="text-center Page-title">
                <i className="fas fa-feather-alt text-primary"></i> Your Projects Update and post page <i className="fas fa-feather-alt text-primary"></i>
                <br/> <br />
                {/* <!-- Post a Project Button trigger modal --> */}
                <PostProject/>
                {/* <!-- post a Project Button trigger modal --> */}

            </h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <div className="col mb-2">
                    <div className="card">
                        <img
                            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </p>

                            {/* <!-- update project Button trigger modal --> */}
                            <UpdateProject/>
                            {/* <!-- update project Button trigger modal --> */}

                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default Projects;