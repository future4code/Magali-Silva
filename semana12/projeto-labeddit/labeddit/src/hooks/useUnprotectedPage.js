import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToPostsFeedPage } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    
    if (token){
      goToPostsFeedPage(history)
    }
  }, [history])
}

export default useUnprotectedPage