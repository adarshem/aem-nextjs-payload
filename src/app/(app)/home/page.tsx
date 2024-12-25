import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { getClientSideURL } from '@/utilities/getURL'
import ImageWrapper from '@/app/components/ImageWrapper'

export default async function HomePage(): Promise<React.JSX.Element> {
  const payload = await getPayloadHMR({
    config: configPromise,
  })

  const mediaCollection = await payload.find({
    collection: 'media',
    limit: 10,
  })

  const mediaCollectionData = mediaCollection?.docs.map((doc) => {
    return {
      ...doc,
      url: `${getClientSideURL()}${doc.url}`,
    }
  })

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mediaCollectionData.map((media) => (
          <div
            key={media.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
          >
            <ImageWrapper src={media.url} alt={media.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
