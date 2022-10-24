
const EmailForm = () => {
  return (
    // We pass the event to the handleSubmit() function on submit.
   <div>
      <div className="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400">
              <div className="max-w-xl mx-auto px-10">
                  <h2 className="text-xl text-left inline-block font-semibold text-gray-800">Join My Newsletter</h2>
                  <p className="text-gray-700 text-xs pl-px">
                  ✅ Get to know latest tips and tricks to productivity, marketing and being human 📬
                  </p>
                  <form onSubmit={handleSubmit} className="mt-2">
                      <div className="flex items-center">
                          <input type="email" id='email' name='email' className="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none" required/>
                          <button className="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow -ml-32" type='submit' >Sign Up</button>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  );
}


const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/airtable";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Thank you for signing up: ${result.data} 📨`);
    return result;
    
  };


export default EmailForm





