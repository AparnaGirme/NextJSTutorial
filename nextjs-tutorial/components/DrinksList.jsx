import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const DrinksList = ({drinks}) => {
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>DrinksList
    {
        drinks.map((drink) => {
            return <li key={drink.idDrink}>
                <Link href={`/drinks/${drink.idDrink}`}>
                <div className='relative h-48 mb-4'> 
                <Image src={drink.strDrinkThumb} fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw' 
                alt='{drink.strName}' className='rounded-md object-cover'></Image>
                </div>
                {drink.strDrink}
                </Link>
            </li>
        })}
    </ul>
  )
};


export default DrinksList