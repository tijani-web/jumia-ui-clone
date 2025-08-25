import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout'
import AppliancesProducts from '../components/AppliancesProducts'

const Appliances = () => {
  return (
    <Layout>
        <div className="appliances">
            <div className="appliances-con">
                <div className="top-pages">
                    <NavLink to={`/`} className='app-home'>Home</NavLink>
                    <p className='app-sign'>{`>`}</p>
                    <p app-app>Appliances</p>
                </div>
                <div className="cat-title">
                    <h1>Home Appliances</h1>
                </div>
                <div className="call-to-order">
                    <h1>CALL TO ORDER 0910081111111</h1>
                </div>

                <div className="call-to-order stock-deal">
                    <h1>Limited Stock Deal</h1>
                    <a href="">See All {`>`}</a>
                </div>
                <AppliancesProducts/>
            </div>
        </div>
    </Layout>
  )
}

export default Appliances