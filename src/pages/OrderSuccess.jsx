const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          🎉 Order Placed Successfully!
        </h2>

        <p className="text-[var(--color-grayText)]">
          Thank you for your purchase.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;