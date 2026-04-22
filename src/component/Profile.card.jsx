function Profile() {
    const name = "Okoro Ugochukwu";
    const course = "Frontend Web Development";
    const city = "Aba";
    const tuitionPaid = 150000;
    return (
    <div className="mx-auto bg-blue-300 rounded-2xl box-shadow max-w-sm p-7 mt-4 border-gray-500 shadow-md">
      <h1 className="text-2xl font-bold mb-2 text-yellow-300">Name: {name}</h1>
      <p className="text-xs font-semibold text-gray-600 uppercase">Course: {course}</p>
      <p className="text-xs font-semibold text-gray-600 uppercase">City: {city}</p>
      <p className="text-xs font-semibold text-gray-600 uppercase">Tuition Paid: ₦{tuitionPaid.toLocaleString()}</p>
    </div>
  );
}
export default Profile;