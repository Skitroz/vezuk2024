import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
        <header>
            <div>
                <h2 className='text-center bg-red-600 uppercase text-white py-3 text-xs font-mono tracking-widest font-bold'>On recrute, <Link className="underline" href="/contact">contactez nous !</Link></h2>
            </div>
        </header>
    </>
  )
}
