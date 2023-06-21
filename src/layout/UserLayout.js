import React from 'react'
import { Header } from '../components'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ipsam cum provident minus inventore placeat maiores quis 
                 quam blanditiis consectetur ut, maxime ea voluptatum vero 
                 officiis molestias ex atque temporibus sapiente alias sit
                  fuga amet! Perspiciatis nostrum doloremque ad! Reiciendis 
                  soluta minus ut asperiores, error debitis illum quaerat, 
                  facilis incidunt unde vel similique iusto quidem provident 
                  fugit excepturi id tempora, autem at!
            </div>
        </div>
    )
}

export default UserLayout