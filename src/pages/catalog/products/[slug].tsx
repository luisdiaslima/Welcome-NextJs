import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const  AddToCartModal = dynamic(() => import('@/components/AddToCartModal'),
    { loading: () => <p>Loading...</p> }
)

export default function Product() {
    const [modalVisible, setModalVisible] = useState(false)

    function handleAddToCart() {
        setModalVisible(true)
    }
    const router = useRouter()
    return (
        <div>
            <h1>{router.query.slug}</h1>

            <button onClick={handleAddToCart}>Add to cart</button>

            {modalVisible && <AddToCartModal/>}
        </div>
    )
}