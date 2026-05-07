import React from 'react'

const page = () => {
  return (
    <div>
<section
  id="contact"
  className="bg-black text-white py-20 px-5"
>
  <div className="max-w-7xl mx-auto">
    
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-14">
      Start Your <span className="text-gray-400">Animation Project</span>
    </h2>

    <div className="grid lg:grid-cols-2 gap-10">
      
      {/* Left Side */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        
        <h3 className="text-3xl font-semibold mb-2">
          Get in Touch
        </h3>

        <p className="text-gray-400 mb-8">
          We're just a message away
        </p>

        <div className="space-y-6">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
              <i className="fas fa-envelope"></i>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-400">
                toonlanceservice@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
              <i className="fab fa-discord"></i>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Discord</h4>
              <p className="text-gray-400">@toonlance</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
              <i className="fas fa-clock"></i>
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Response Time
              </h4>
              <p className="text-gray-400">
                Within 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Form */}
      <form
        className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
        id="contactForm"
        action="https://formspree.io/f/myzenzjg"
        method="POST"
      >
        
        <div className="grid md:grid-cols-2 gap-5">
          
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Name *
            </label>

            <input
              type="text"
              name="name"
              required
              className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Discord Username
          </label>

          <input
            type="text"
            name="discord"
            className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Budget *
            </label>

            <input
              type="text"
              name="budget"
              placeholder="$350 - $5000"
              required
              className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Service *
            </label>

            <select
              name="service"
              required
              className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
            >
              <option value="">Select</option>
              <option>2D Animation</option>
              <option>Storyboard</option>
              <option>Character Design</option>
              <option>Background Art</option>
              <option>Cartoon Series</option>
            </select>
          </div>

        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Project Details *
          </label>

          <textarea
            name="message"
            rows={5}
            required
            className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300"
        >
          Send Inquiry <i className="fas fa-paper-plane ml-2"></i>
        </button>

        <div
          id="formMessage"
          className="mt-4 hidden"
        ></div>
      </form>

    </div>
  </div>
</section>
    </div>
  )
}

export default page