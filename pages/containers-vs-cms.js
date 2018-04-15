import Post from '../layouts/post'
import A from '../components/post/a'
import { Image } from '../components/post/figure'

export default () => (
    <Post title='Containers vs. VMs explained in one pic'>

        <Image src='/static/images/containers-vs-vms.png' />

        <A external href='http://www.zdnet.com/article/what-is-docker-and-why-is-it-so-darn-popular/'>Origin</A>.

    </Post>
)