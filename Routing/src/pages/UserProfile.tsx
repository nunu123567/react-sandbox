import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/" className="text-blue-500">
        ← Back to list
      </Link>

      <h1 className="text-2xl font-bold mt-4">{user.name}</h1>

      <p className="mt-2">Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p className="text-blue-500">{user.website}</p>
    </div>
  );
};

export default UserProfile;