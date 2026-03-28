import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className="grid grid-cols-2 gap-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>

            <Link
              to={`/user/${user.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;