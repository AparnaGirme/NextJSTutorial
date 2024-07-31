import React from 'react'
import Link from 'next/link';
import DrinkImage from './drink.jpg';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSinglePage = async (id) => {
    const res = await fetch(`${url}${id}`)
    if(!res.ok){
        throw new Error('Failed to fetch a drink...');
    }
    return res.json();
};
const SingleDrinkPage = async ({params}) => {
    const data = await getSinglePage(params.id);
    const title = data?.drinks[0]?.strDrink
    const imgSrc = data?.drinks[0]?.strDrinkThumb
    console.log(title, imgSrc);
  return <div>
    <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>back to drinks</Link>
    {/* <div className='relative h-72 w-72 rounded-lg'>
    <Image fill={true} src={DrinkImage}  alt='drink'/>
    </div> */}
    <Image src={imgSrc} width={300} height={300} className='w-48 h-48 rounded-lg shadow-lg mb-4' priority alt={title}/>
    
    <h1 className='text-4xl mb-8'>{title}</h1>
  </div>
}

export default SingleDrinkPage