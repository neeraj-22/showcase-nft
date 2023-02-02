import React, { Fragment } from 'react'

import "./NFTContainer.css"

const NFTContainer = ({ nfts }) => {

    return (
        <Fragment>
            <div className='gallery' style={{ marginTop: "8rem" }}>
                {nfts.map((nft, index) => {
                    return (
                        nft.meta.content[0].mimeType === "video/mp4"
                            ?
                            <div className='pics' key={index}>
                                <video style={{ width: "100%" }} autoPlay loop>
                                    <source src={nft.meta.content[0].url} type="video/mp4" />
                                </video>
                                {console.log(`${index} and ${nft.meta.name} is a Video`)}
                                <span>I'm A Video</span>
                            </div>
                            :
                            <div className='pics' key={index}>
                                <img src={nft.meta.content[0].url} alt={nft.meta.name} style={{ width: "100%" }} />
                            </div>
                    )
                })}

            </div>

        </Fragment>
    )
}

export default NFTContainer