import React from 'react'

const Grids = () => {
    return (
        <>
            <h1 className="text-center text-danger text-capitalize my-5">Welcome to my site !</h1>
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                                <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height='150px'/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Grids
