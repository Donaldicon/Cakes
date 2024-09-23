import React from 'react'
import { Link } from 'react-router-dom'

const OrderNow = () => {
  const whatsApp = 'https://wa.link/0zpjwq'
  return (
    <div>
        <Link to={whatsApp}>
        <button className='hidden border border-black px-2 py-1 rounded-sm md:block'>Order now</button>
        </Link>
    </div>
  )
}

export default OrderNow