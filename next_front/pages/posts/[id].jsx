import { useRouter } from 'next/router'
import SingleLayout from '../../components/SingleLayout'

const Post = ({ result }) => {
    const router = useRouter()
    const { id } = router.query
    console.log('client side rendering')
    return (
        <SingleLayout>
            # Post {id} {result}
        </SingleLayout>
    )
}

export async function getServerSideProps({ req, res, params }) {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    console.log('server side rendering')
    const { id } =params
    // Pass data to the page via props
    return { props: { result:id } }
}


export default Post