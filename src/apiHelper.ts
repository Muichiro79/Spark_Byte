// apiHelper.ts
const API_URL = 'http://localhost:5000'; // Replace with your backend URL if hosted somewhere

// Function to handle POST request for login
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data; // Typically, you would get a token or user data here
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Function to handle POST request for signup
export const signupUser = async (username: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }

    const data = await response.json();
    return data; // Usually, this would return a success message or token
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};
