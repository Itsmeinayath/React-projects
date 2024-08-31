import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-4xl font-semibold p-6 rounded-lg shadow-lg">
        User: {userid}
      </div>
    )
}

export default User
