class ApiService {
  constructor(baseURL) {
    this.url = baseURL
  }

  async createPost(post) {
   try{
    const request = new Request(this.url + '/posts.json', {
      method: 'post',
      body: JSON.stringify(post)
    })
    return useRequest(request)
    } catch(error) {
    console.error(error)
    }
  }

  async fetchPosts() {
     try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'get'
      })
      return useRequest(request)
     } catch {
      console.error(error)
     }
  }
}

async function useRequest(request) {
  const response = await fetch(request)
  return await response.json()
}

export const apiService = new ApiService('https://tayuya-posts-default-rtdb.firebaseio.com')