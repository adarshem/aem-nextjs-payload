'use client'
import Image from 'next/image'

export default function ImageWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={src} alt={alt} width={200} height={200} layout="responsive" />
    </div>
  )
}
