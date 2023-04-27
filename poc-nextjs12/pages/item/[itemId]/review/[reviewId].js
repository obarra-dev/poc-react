import { useRouter } from 'next/router'

function Review() {
    const router = useRouter()
    const {itemId, reviewId} = router.query

    return (
        <h1>
            Review {reviewId} for Item {itemId}
        </h1>
    )
}

export default Review