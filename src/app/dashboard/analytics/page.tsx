import React from 'react'

const Analytics = () => {
    const metrics = [
        {
            title: 'Total Sales',
            value: '$120,00',
            change: '+12',
            isPositive: true
        }, {
            title: 'Active Users',
            value: '1,200',
            change: '-8%',
            isPositive: false
        }, {
            title: 'Website Visits',
            value: '8500',
            change: '+5%',
            isPositive: true
        }, {
            title: 'New Sign-Ups',
            value: '350',
            change: '+18%',
            isPositive: true
        }
    ]

  return (
    <div>Analytics</div>
  )
}

export default Analytics