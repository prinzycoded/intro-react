function Profile() {
    const name = "Okoro Ugochukwu";
    const course = "Frontend Web Development";
    const city = "Aba";
    const tuitionPaid = 150000;
    return (
    <div className="mx-auto bg-white rounded-2xl shadow-md max-w-sm p-7 mt-4 border-gray-300">
      <h1 className="text-2xl font-bold mb-2 text-white">Name: {name}</h1>
      <p className="text-xs font-semibold text-gray-600 uppercase">Course: {course}</p>
      <p className="text-xs font-semibold text-gray-600 uppercase">City: {city}</p>
      <p className="text-xs font-semibold text-gray-600 uppercase">Tuition Paid: ₦{tuitionPaid.toLocaleString()}</p>
    </div>
  );
}
export default Profile;