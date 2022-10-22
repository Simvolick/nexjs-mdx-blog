import React from 'react'

const EmailFormNative = ({text}) => {
  return (
    <div>
      <div class="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400">
              <div class="max-w-xl mx-auto px-10">
                  <h2 class="text-xl text-left inline-block font-semibold text-gray-800">Join My Newsletter</h2>
                  <p class="text-gray-700 text-xs pl-px">
                  ✅ Get to know latest tips and tricks to productivity, marketing and being human 📬
                  </p>
                  <form action="/api/form" method='post' class="mt-2">
                      <div class="flex items-center">
                          <input type="email" id='email' name='email' class="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none" required/>
                          <button class="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow -ml-32" type='submit' >Sign Up</button>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default EmailFormNative





