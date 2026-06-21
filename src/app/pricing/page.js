import React from 'react'

const page = () => {
  return (
    <div>      <section 

        className="min-h-screen flex items-center justify-center px-8 md:px-20 bg-black"
      >
        <div className="max-w-5xl w-full">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
              Pricing
            </p>

            <h2 

              className="text-5xl md:text-7xl font-light mb-8"
            >
              Simple &
              <span className="font-semibold"> Transparent</span>
            </h2>

            <div className="w-24 h-px bg-white mx-auto mb-8"></div>

            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              High-quality custom 2D animation tailored to your story,
              brand, or project requirements.
            </p>
          </div>

          <div 

            className="border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm"
          >
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

              <div>
                <h3 className="text-3xl font-light mb-3">
                  Custom 2D Animation
                </h3>

                <p className="text-neutral-500">
                  Fully customized production pipeline.
                </p>
              </div>

              <div>
                <span className="text-6xl md:text-8xl font-semibold">
                  $400
                </span>
                <span className="text-neutral-500 text-xl ml-3">
                  / minute
                </span>
              </div>

            </div>

            <div className="w-full h-px bg-white/10 my-10"></div>

            <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
              {[
                "Custom Character Design", "Custom Background Design",
                "Storyboarding", "Professional Animation",
                "Cinematic Camera Movement", "Scene Composition",
                "Lighting & Effects", "HD Video Delivery",
                "Commercial Usage", "Revisions Included"
              ].map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>

          </div>

        </div>
      </section></div>
  )
}

export default page