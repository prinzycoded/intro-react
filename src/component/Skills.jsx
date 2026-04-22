function Skills() {
  const skill1 = "HTML & CSS";
  const skill2 = "JavaScript";
  const skill3 = "React";

  return (
        <div className="bg-blue-300 shadow-md rounded-lg p-10 max-w-sm mt-4 text-yellow-300">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>{skill1}</li>
            <li>{skill2}</li>
            <li>{skill3}</li>
          </ul>
        </div>
  );
}

export default Skills;