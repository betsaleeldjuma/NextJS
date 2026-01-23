import React from 'react'

const UsersDetails = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    bio: 'Lorem ipsum dolor sit ame, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.',
    profilPicture: '',
    activities: [
      {id: 1, description: 'Updated password', timestamp: '2025-02-10'},
      {id: 2, description: 'Changed email adress', timestamp: '2025-01-25'},
      {id: 3, description: 'Logged in from a new device', timestamp: '2025-01-15'}
    ]
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <div className='flex items-center mb-8'>
          <img src={user.profilPicture} alt="Profile" className='w-20 h-20 rounded-full object-cover mr-6' />
          <div> </div>
        </div>
      </div>
    </div>
  )
}

export default UsersDetails