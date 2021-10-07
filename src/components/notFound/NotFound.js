import React from 'react'
import { Helmet } from 'react-helmet-async'

const NotFoundText = 'Not Found'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{NotFoundText}</title>
      </Helmet>
      <div>{NotFoundText}</div>
    </>
  )
}

export default NotFound
