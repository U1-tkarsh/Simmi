import React from 'react'

function Profile() {
  return (
    <div>

<section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                    Utkarsh Rai
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Varanasi, Uttar Pradesh
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Medicaps University 
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fa-solid fa-envelope mr-2 text-lg text-gray-500"></i>
                    raiutkarsh554@gmail.com
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    +91 6386751691
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fa-brands fa-linkedin mr-2 text-lg text-gray-500"></i>
                    https://www.linkedin.com/in/utkarsh-rai-466a54218
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fa-brands fa-github mr-2 text-lg text-gray-500"></i>
                    https://github.com/U1-tkarsh?tab=repositories
                  </div>
                </div>
    </div>
  )
}

export default Profile