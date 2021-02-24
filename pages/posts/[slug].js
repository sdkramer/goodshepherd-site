import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react'

export const Post = ({title, body, image}) => {
 const  [imageUrl, setImageurl] = useState('')

 useEffect(() => {
const imgBuilder = imageUrlBuilder({
  projectId: 'uk6noi48',
  dataset: 'production',
})

setImageurl(imgBuilder.image(image))
 }, [image])
return (
<main>
  <section>
    <h1>{title}</h1>
{imageUrl && <img src={imageUrl} />}
<div>
  <BlockContent blocks={body} />
</div>
  </section>
</main>
  )
}

export const getServerSideProps = async pageContext => {
const pageSlug = pageContext.query.slug
if (!pageSlug) {
  return {
    notFound: true
  }
}
const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)
const url = `https://uk6noi48.api.sanity.io/v1/data/query/production?query=${query}`

const result = await fetch(url).then(res => res.json())
const post = result.result[0]

if (!post) {
  return {
    notFound: true
  }
} else {
  return {
    props: {
      title: post.title,
      body: post.body,
      image: post.mainImage,
    }
  }
}

}


export default Post;