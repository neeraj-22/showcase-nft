import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ice from "../../Assets/ice.webp"
import hammer from "../../Assets/hammer.png"

const Body = () => {

    const [walletAddress, setWalletAddress] = useState(null);

    const navigate = useNavigate();

    const handleClick = async () => {

        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            setWalletAddress(accounts[0]);

        }
    }

    useEffect(() => {
        //  eslint-disable-next-line
        { walletAddress && navigate(`/${walletAddress}/nfts`) }
    }, [walletAddress, navigate])

    return (
        <Fragment>
            <main>
                <div className="w-100 overflow-hidden position-relative bg-black text-white">
                    {/* <div className="w-100 overflow-hidden position-relative bg-black text-white" > */}
                    <div className="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0"></div>
                    <div className="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
                        <div className="row d-flex align-items-center justify-content-center py-vh-5">
                            <div className="col-12 col-xl-10">
                                <span className="h5 text-secondary fw-lighter">a little ice breaker {` `}
                                    <img src={ice} alt="iceemoji" height={"30px"} width={"30px"} />
                                    <img src={hammer} height={"30px"} width={"30px"} alt="hammeremoji" />
                                </span>

                                <h1 className="display-large mt-3 mb-3 lh-2 ">We know you have a very cool
                                    <br />
                                    NFT Collection
                                </h1>
                            </div>
                            <div className="col-12 col-xl-8">
                                <p className="lead text-secondary">
                                    and they deserve to be shown off to the world.
                                    <br />
                                    Showcase-NFT is a project that generates an image wall of your selected tokens that you can brag about in your github readme or anywhere you like.
                                </p>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-xl btn-light" onClick={handleClick}>Showcase NFTs in MD {`  `}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </Fragment>
    )
}

export default Body