export const loginUser = async (username: string, password:string) => {
          const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The data we are sending must be converted to a JSON string!
        body: JSON.stringify({ 
          username: username, 
          password: password 
        })
      });

      if (!response.ok) throw new Error("Wrong credentials!");

      // Parse the response from the server
      const data = await response.json();

      return data;
}

export const sendFeedback = async (title: string, message:string) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                title: title, 
                body: message
            }),
        });

        const data = await response.json();

        return data;
}