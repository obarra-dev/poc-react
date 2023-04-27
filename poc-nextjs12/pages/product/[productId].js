import {useRouter} from 'next/router'

function ProductDetail() {
    const router = useRouter()
    const id = router.query.productId

    return <h1>Product deatail {id}</h1>
}

export default ProductDetail