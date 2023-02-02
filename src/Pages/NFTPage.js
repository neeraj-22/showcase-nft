import React, { Fragment, useEffect, useRef, useState } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image';

import { useNavigate, useParams } from 'react-router-dom'

import Header from '../Components/Layout/Header.js';
import NFTContainer from '../Components/NFTContainer.js'

const NFTPage = () => {

    const { walletAddress } = useParams();

    const navigate = useNavigate();

    const [nftData, setNftData] = useState([]);

    const [nftCount, setNFTCount] = useState(null);

    const nftWallImage = useRef();

    const getNFTData = async () => {

        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)

        const data = await response.json();

        console.log(data);

        console.log(data.items.filter(filterNFTData).slice(0, 9));

        setNftData(data.items.filter(filterNFTData).slice(0, 9));

        setNFTCount(data.items.length);
    }


    const filterNFTData = (nft) => {
        if (nft.meta.content[0].mimeType === "video/mp4") {
            console.log("found a video");
            return false;
        }

        return true;
    }

    const downloadNFTWallImg = (e) => {
        e.preventDefault();
        console.log("working")
        exportComponentAsPNG(nftWallImage);
        navigate(`/${walletAddress}/upload`)
    }


    useEffect(() => {
        getNFTData();
        // eslint-disable-next-line
    }, [walletAddress, nftCount])

    return (
        <Fragment>
            <Header showAddress={walletAddress.slice(0, 5) + "..." + walletAddress.slice(35, 41)} />

            <div ref={nftWallImage}>
                <NFTContainer nfts={nftData} />
            </div>

            <div className='d-flex justify-content-center align-items-center mt-3'>

                {
                    nftCount === 0 ?
                        <button className="bg-black btn btn-outline-secondary text-white display-3" style={{ cursor: "pointer" }} disabled>
                            No NFTs Found at this address
                        </button>
                        :
                        <button className="bg-black btn btn-outline-secondary text-white display-3" style={{ cursor: "pointer" }} onClick={downloadNFTWallImg}>
                            Generate
                        </button>
                }

            </div>
        </Fragment>
    )
}

export default NFTPage