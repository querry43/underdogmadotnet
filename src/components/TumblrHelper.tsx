import * as tumblr from 'tumblr.js'
 
export const getBlogPosts = async (blog : string, offset : number, limit : number, consumerKey : string) => {
  const client = tumblr.createClient({
    credentials: {
      consumer_key: consumerKey
    },
    returnPromises: true
  })

  const request : any = client.blogPosts(blog, {offset, limit} as any)

  try {
    const data = await request
    return data.posts
  } catch (error) {
    global.console.warn(error)
    return {}
  }
}
