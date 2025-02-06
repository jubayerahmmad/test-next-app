"use client";

import registerUser from "../actions/auth/registerUser";

const Register = async () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    const userData = { email, password };
    const insertToDb = await registerUser(userData);
    form.reset();
    console.log(insertToDb);
  };
  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleRegister}
        className="p-4 rounded-md border mt-6 space-y-3"
      >
        <div className="w-full">
          <label htmlFor="email" className="text-[15px] text-text font-[400]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="bg-gray-900 text-white border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-[15px] text-text font-[400]"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="bg-gray-900 text-white border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>

        <button className="px-4 py-2 bg-gray-950 rounded-md border font-bold">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
