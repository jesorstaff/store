import SidebarLayout from '@/layouts/sidebarLayout'

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    console.log('cart', cart)

    const totalAmount = cart.reduce((acc: number, item: any) => {
        return acc + item.price
    }, 0)

    const handleRemoveItem = (id: string) => {
        const newCart = cart.filter((item: any) => item.productId !== id)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    return (
        <SidebarLayout>
            <div className="flex items-center justify-between py-9">
                <h1 className="text-2xl font-bold">Product Order</h1>
            </div>
            <div className="bg-white rounded-2xl py-16 px-10">
                <div className="font-bold">Your Bag</div>
                <div className="mt-12">
                    {cart.map((item: any) => (
                        <div
                            key={item.productId}
                            className="grid grid-cols-[92px_1fr_100px_100px_100px] justify-items-center items-center gap-x-5 py-8 border-b-1 border-gray-300"
                        >
                            <div>
                                <img
                                    src={item.productImage}
                                    alt={item.productName}
                                    className="w-23 h-23 object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex flex-col justify-self-start gap-y-2 px-14">
                                <div className="font-bold">
                                    {item.productName}
                                </div>
                                <div>size: 1</div>
                            </div>
                            <div>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className="font-bold">$ {item.price}</div>
                            <div>
                                <button
                                    className="cursor-pointer"
                                    onClick={() =>
                                        handleRemoveItem(item.productId)
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-[92px_1fr_100px_100px_100px] justify-items-center items-center gap-x-5 py-8 mt-10">
                        <div></div>
                        <div className="flex flex-col justify-self-start gap-y-2 px-14 font-bold">
                            Total Amount
                        </div>
                        <div></div>
                        <div className="font-bold">$ {totalAmount}</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    )
}

export default Cart
