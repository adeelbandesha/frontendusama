import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1 className='display-1 text-primary'>404</h1>
        <p className='display-5'>Page Not Found</p>
        <Link to="/">
        <Button variant="primary">Go Home</Button>
        </Link>
    </div>
  )
}
