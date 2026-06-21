import React from 'react'

const page = () => {
  return (
    <div>      <section 

        className="py-32 px-8 md:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
              Testimonials
            </p>

            <h2 
      
              className="text-5xl md:text-7xl font-light mb-8"
            >
              Trusted By
              <span className="font-semibold"> Studios</span>
            </h2>

            <div className="w-24 h-px bg-white mx-auto mb-8"></div>

            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Feedback from animation studios, production houses and creative teams
              we've collaborated with.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                text: "The people at ToonLance are some of the nicest and coolest people I have ever worked with. They focused on quality over quantity even at an affordable price when it comes to animation. I highly recommend them if you ever need a freelancing animation company to work with.",
                initials: "PT",
                name: "PanicToons",
                role: "Indie Animation Studio"
              },
              {
                text: "ToonLance's team of animators continue to provide my studio with the animations we need, intuitively and with a level of quality that reflects famous TV series. We negotiated prices that a working-class person can afford. I'll definitely be reaching out again.",
                initials: "RE",
                name: "Ryan Edgar",
                role: "Game Development Studio"
              },
              {
                text: "ToonLance is one of the greatest artists I ever worked with. They focus on attention to detail, always with quality over quantity, offering prices you can count on. I recommend ToonLance if you ever need special freelance animation work.",
                initials: "MP",
                name: "MHYT Productions",
                role: "Animation Production House"
              },
              {
                text: "ToonLance has been a big help animating on my show. They are very effective and deliver quality work at an affordable price. I highly recommend you hire them for your cartoons.",
                initials: "PP",
                name: "Plushbomb Productions",
                role: "Cartoon Studio"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
          
                className="border border-white/10 rounded-3xl p-8"
              >
                <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center font-semibold text-lg">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section></div>
  )
}

export default page