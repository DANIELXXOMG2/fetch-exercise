import { useState, useEffect } from 'react'
import './App.css'
import Comment from './components/Comment'

function App() {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos')
        }
        
        const data = await response.json()
        setComments(data)
        setIsLoading(false)
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [])

  return (
    <div className="app-container">
      <h1>Comentarios desde API</h1>
      
      {isLoading && (
        <div className="loading">
          <p>Obteniendo datos...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>Error: {error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="comments-container">
          {comments.map((comment) => (
            <Comment 
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
