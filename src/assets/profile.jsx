function profile() {
    const name = "Price Ikechukwu";
    const course = "Frontend Web Development";
    const city = "Aba";
    const tuitionPaid = 150000;
    return (
    <div className="text-gray-800 bg-white shadow-md rounded-3xl max-w-0.5">
      <p className="text-gray-700 border-b-lime-400 text-2xl">Name: {name}</p>
      <p className="text-gray-600">Course: {course}</p>
      <p className="text-gray-600">City: {city}</p>
      <p className="text-gray-600">Tuition Paid: ₦{tuitionPaid.toLocaleString()}</p>
    </div>
  );
}

export default profile;