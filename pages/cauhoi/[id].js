import Question from '../../src/ui/Question'
import { useRouter } from 'next/router'

const a = ()=>{
    const router = useRouter()
    return(<div>
        <Question></Question>
    </div>)
}
export default a