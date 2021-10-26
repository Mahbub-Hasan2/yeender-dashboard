import React from 'react';
import PostService from './Modals/PostService';
import UpdateService from './Modals/UpdateService';

const Services = () => {


    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div id="dashboard_services_pa">
            <h4 className="text-center Page-title">
                <i className="fas fa-feather-alt text-primary"></i> Your Services Update and post page <i className="fas fa-feather-alt text-primary"></i> <br />
                <br />
                
                {/* <!-- post service Button trigger modal --> */}
                <PostService/>
                {/* <!-- post service Button trigger modal --> */}
            </h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <div className="col mb-2">
                    <div className="card">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </p>

                            {/* <!-- update service Button trigger modal --> */}
                            <UpdateService/>
                            {/* <!-- update service Button trigger modal --> */}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;