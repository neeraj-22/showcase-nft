import React, { Fragment, useEffect, useState } from 'react'
import "./UploadToCloudinary.css"

import Header from '../Components/Layout/Header';
import { useParams } from 'react-router-dom';

import confetti from "../Assets/successConfetti.png"

const UploadToCloudinary = () => {

    const { walletAddress } = useParams();

    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [imgURL, setImgURL] = useState(null);

    const handleImageUpload = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
    }

    const handleCloudinaryUpload = async () => {
        setLoading(true);
        const data = new FormData();

        data.append("file", image);
        data.append("upload_preset", "github-nft");
        data.append("cloud_name", "dldtyoeg6");

        const res = await fetch("https://api.cloudinary.com/v1_1/dldtyoeg6/image/upload", {
            method: "post",
            body: data
        })

        const file = await res.json();

        console.log(file.url);

        setImgURL(file.url)

        setLoading(false);
    }

    useEffect(() => {

    }, [loading, imgURL])

    return (
        <Fragment>
            <Header showAddress={walletAddress.slice(0, 5) + "..." + walletAddress.slice(35, 41)} />

            <div className='container-uploadform'>
                <label htmlFor="images" className="drop-container">
                    {
                        imgURL ?
                            <>
                                <img src={confetti} width="30%" height="50%" alt="confetti" />
                                <br />
                                <div className="input-group d-flex justify-content-center align-items-center">
                                    <input type="text" className="input"
                                        value={`### My NFT Collection from <a href="https://github.com/neeraj-22/showcase-nft" target="_blank">Showcase-NFT</a> <img src="${imgURL}" alt="NFTs at address : ${walletAddress}" />`}
                                        disabled
                                    />
                                </div>
                            </>
                            :
                            <>
                                <span className="drop-title">Drop file here</span>
                                or
                                <input type="file" id="images" accept="image/*" required onChange={handleImageUpload} />
                            </>
                    }

                </label>
            </div>

            <div className='d-flex justify-content-center align-items-center mt-3'>

                {imgURL ?
                    <button className="bg-black btn btn-outline-secondary text-white display-3 uploadBtn" style={{ cursor: "pointer" }} disabled>
                        <small>
                            Paste the above link in md and voila!
                        </small>
                    </button>
                    :
                    (
                        loading ?
                            <button className="bg-black btn btn-outline-secondary text-white display-3 uploadBtn" style={{ cursor: "pointer" }} disabled>
                                <small>
                                    Hang up! This might Take a while

                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="sr-only"></span>
                                    </div>

                                </small>
                            </button>
                            :
                            <button className="bg-black btn btn-outline-secondary text-white display-3 uploadBtn" style={{ cursor: "pointer" }} onClick={handleCloudinaryUpload}>
                                <small>
                                    Upload to get Link
                                </small>
                            </button>
                    )
                }
            </div >
        </Fragment >
    )
}

export default UploadToCloudinary