const CommonInput = ({ label, name, type, value, handleInput }) => {
  return (
    <div>
      <label className="block my-2 tracking-wide text-lg font-semibold text-gray-900">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name={name}
        placeholder={`Enter your ${name}`}
        type={type}
        value={value || ""}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default CommonInput;
