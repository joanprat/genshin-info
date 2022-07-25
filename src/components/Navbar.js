import React from "react";
export default function Navbar () {
    return (
    <nav className="navbar navbar-expand-lg custom-navbar m-0">
        <div className="container">
            <div className="col-lg-3 col-md-5 col-6">
                <img src="/assets/img/logo.png" alt="Genshin logo"/>    
            </div>
            <div className="col-lg-9 col-md-7 col-6">
                <div className="d-flex flex-row align-items-center justify-content-end">
                    <span className='bx bxl-github mx-4'></span>
                    {/* Button */}
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#about">
                    About this site
                    </button>

                    {/* Modal */}
                    <div className="modal fade" id="about" tabIndex="-1" aria-labelledby="About this website" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">About this site</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                {`This site isn't related to Hoyoverse and doesn't reflect the views or opinions of Hoyoverse or anyone officially involved in producing or managing Genshin Impact .`}
                            </p>
                            <p>
                                {`Genshin Impact and Hoyoverse are trademarks or registered trademarks of miHoYo, this site will not take use of it's original content to benefit from it.`}
                            </p>
                            <p>
                                All character data displayed by this site is provided by <a href="https://genshin.dev/">genshin.dev</a> API, cheers to them for it's great work.
                            </p>
                        </div>
                        <div className="modal-footer text-center">
                            <div className="container text-center">
                                <a href="https://genshin.hoyoverse.com/en/home">{`Genshin Impact © Hoyoverse.`}</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
}