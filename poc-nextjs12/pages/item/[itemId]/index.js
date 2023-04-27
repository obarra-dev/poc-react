import {useRouter} from 'next/router'

function Item() {
    const router = useRouter()
    const id = router.query.itemId

    return <h1>Item  {id}</h1>
}

export default Item