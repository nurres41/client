import React from 'react'
import CardTotal from '../components/card/CardTotal'
import Product from '../components/product/Product'
import Categories from '../components/categories/Categories'
import Header from '../components/Header/Header'

const HomePage = () => {
  return (
    <div>
    <Header />
    <div className='home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-32'>
      <div className='categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10'>
        <Categories />
      </div>
      <div className='products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10'>
        <Product />
      </div>
      <div className='card-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border'>
        <CardTotal />
      </div>
    </div>
  </div>
  )
}

export default HomePage
