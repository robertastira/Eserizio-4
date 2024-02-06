import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState } from 'react'
import { useEffect } from 'react'


  const MyComments = () => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
 
 
    useEffect (() async ({prevProps}) => {
    if (prevProps.asin !== props.asin) {
      setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            props.asin,
          {
            headers: {
              Authorization: 'Bearer inserisci-qui-il-tuo-token',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments([comments]),
          setIsLoading(false),
          setIsError(false)}
          
  
        } else {
          setIsLoading(false),
          setIsError(true)},
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false),
          setIsError(true)}
  )

 
    return (
      <div className="text-center">
        {setIsLoading(true) && <Loading />}
        {setError(true) && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )

}

export default CommentArea
