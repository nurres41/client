import { Button } from 'antd'
import React from 'react'
import {ClearOutlined, PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons"

const CardTotal = () => {
  return (
    <div className='card h-full flex flex-col max-h-[calc(100vh_-_90px)]'>
        <h2 className='bg-blue-500 text-center py-4 text-white font-bold tracking-wide'>Sepetteki Urunler</h2>
        <ul className='card-items px-2 flex flex-col gap-y-3 pt-2 overflow-y-auto py-3'>
            <li className='card-item flex justify-between'>
                <div className='flex items-center'>
                    <img src='https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2023/03/lahm-56-2.jpg' className='w-16 h-16 object-cover' alt=''/>
                    <div className='flex flex-col items-center justify-center ml-2'>
                        <b>Lahmacun</b>
                        <span>12$ * 2</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <Button type='primary' size='middle' className='!rounded-full' icon={<PlusCircleOutlined />} />
                    <span className='h-full flex items-center text-lg'>1</span>
                    <Button type='primary' size='middle' className='!rounded-full' icon={<MinusCircleOutlined />} />
                </div>
            </li>
            <li className='card-item flex justify-between'>
                <div className='flex items-center'>
                    <img src='https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2023/03/lahm-56-2.jpg' className='w-16 h-16 object-cover' alt=''/>
                    <div className='flex flex-col items-center justify-center ml-2'>
                        <b>Lahmacun</b>
                        <span>12$ * 2</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <Button type='primary' size='middle' className='!rounded-full' icon={<PlusCircleOutlined />} />
                    <span className='h-full flex items-center text-lg'>1</span>
                    <Button type='primary' size='middle' className='!rounded-full' icon={<MinusCircleOutlined />} />
                </div>
            </li>
            <li className='card-item flex justify-between'>
                <div className='flex items-center'>
                    <img src='https://hadiaslebanesecuisine.com/newsite/wp-content/uploads/2023/03/lahm-56-2.jpg' className='w-16 h-16 object-cover' alt=''/>
                    <div className='flex flex-col items-center justify-center ml-2'>
                        <b>Lahmacun</b>
                        <span>12$ * 2</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <Button type='primary' size='middle' className='!rounded-full' icon={<PlusCircleOutlined />} />
                    <span className='h-full flex items-center text-lg'>1</span>
                    <Button type='primary' size='middle' className='!rounded-full' icon={<MinusCircleOutlined />} />
                </div>
            </li>
            
        </ul>
        <div className='card-totals mt-auto'>
            <div className='border-t border-b'>
                <div className='flex  justify-between p-2'>
                    <p>Ara Toplam</p>
                    <span> 99$</span>
                </div>
                <div className='flex  justify-between p-2'>
                    <p>KDV %8</p>
                    <span className='text-red-700'>+9$</span>
                </div>
            </div>
            <div className='border-b mt-4'>
                <div className='flex  justify-between p-2'>
                    <p className='text-xl text-green-500'>Genel Toplam</p>
                    <span className='text-xl'> 99$</span>
                </div>
            </div>
            <div className='py-4 px-2'>
                <Button type='primary' size='large' className='w-full' >Siparis Olustur</Button>
                <Button type='primary' size='large' className='w-full mt-2' danger icon={<ClearOutlined />} >Temizle</Button>
            </div>
        </div>
    </div>
  )
}

export default CardTotal
