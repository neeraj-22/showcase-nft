import React, { Fragment } from 'react'

const NFTCard = ({ nft }) => {
  return (
    <Fragment>
      <div>
        <img src={nft.meta.content[0].url} alt={`${nft.meta.name}`} width="100px" height="100px"/>
        <h2>{nft.meta.name}</h2>
      </div>
    </Fragment>
  )
}

export default NFTCard