import { Button } from '@/components/ui/button';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    
        <div className="flex flex-col gap-10 w-full min-h-screen justify-center items-center">
                <img src="/404.svg" alt="404" height={500} width={500}/>
                <Link to={"/home"}><Button>Back to Home</Button></Link>
            </div>
      
    
  )
}

export default NotFound
