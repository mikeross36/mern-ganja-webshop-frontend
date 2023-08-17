const apiUrl = process.env.REACT_APP_API_URL;

const Order = ({ order }) => {
  return (
    <li className="order__card">
      <figure className="order__card-content">
        <h4>order items</h4>
        {order?.orderItems?.map((item) => {
          return (
            <article key={item.id} className="order__item">
              <img
                src={`${apiUrl}/images/ganjas/${item.image}`}
                alt="order item pic"
              />
              <p className="order__item-name">{item.name}</p>
              <p>price: {item.prices[0][item.packing].toFixed(2)}€</p>
              <p>quantity: {item.quantity}</p>
              <p>
                total:{" "}
                {(item.prices[0][item.packing] * item.quantity).toFixed(2)}€
              </p>
            </article>
          );
        })}
      </figure>
      <div className="order__info">
        <p>Address</p>
        <div className="order__data">
          <span>Street: {order.shippingAddress.street}</span>
          <span>City: {order.shippingAddress.city}</span>
          <span>Postal Code: {order.shippingAddress.postalCode}</span>
        </div>
      </div>
      <div className="order__info">
        <p>Order Info</p>
        <div className="order__data">
          <span>Amount: {order.orderAmount.toFixed(2)}€</span>
          <span>Date: {order.createdAt.substr(0, 10)}</span>
          <span>Transaction: {order.transactionId}</span>
          <span>Order ID: {order._id}</span>
        </div>
      </div>
    </li>
  );
};

export default Order;
