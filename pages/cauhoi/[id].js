import Question from '../../src/ui/Question'
import { useRouter } from 'next/router'

const a = ()=>{
    const router = useRouter()
    console.log(router.query.id) 
    return(<div>
        <Question></Question>
    </div>)
}
export default a