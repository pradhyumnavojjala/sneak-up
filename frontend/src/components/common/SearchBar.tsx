import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-4 py-3">
      <FiSearch className="text-gray-500 mr-2" />

      <input
        type="text"
        placeholder="Search groceries, frozen meals..."
        className="bg-transparent outline-none w-full"
      />
    </div>
  );
}