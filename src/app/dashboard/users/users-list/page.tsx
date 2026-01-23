import React from 'react'

const UsersList = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active'
    }, {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Editor',
      status: 'Inactive',
    }, {
      id: 3,
      name: 'Sam Brown',
      email: 'sam.brown@example.com',
      role: 'User',
      status: 'Suspended'
    }, {
      id: 4,
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      role: 'Admin',
      status: 'Active'
    }, {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'Editor',
      status: 'Inactive'
    }, {
      id: 6,
      name: 'Sarah Davis',
      email: 'sarah.davis@example.com',
      role: 'User',
      status: 'Suspend'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Users List</h1>
      </div>
    </div>
  )
}

export default UsersList