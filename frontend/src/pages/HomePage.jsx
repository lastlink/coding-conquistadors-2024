export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.internationaldriveorlando.com/images/hero/0/main-OCCC.webp')",
        }}
      >
        <div className="bg-black bg-opacity-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              CLTConnect
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8">
              Empowering Community Land Trusts to Preserve Affordable Housing
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About CLTConnect
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              CLTConnect is a digital platform designed to tackle the critical
              funding and sustainability challenges facing Community Land Trusts
              (CLTs) in their mission to preserve affordable housing. CLTs play
              a transformative role by enabling accessible homeownership and
              fostering long-term community stability.
            </p>
            <p>
              However, their unique structure often limits access to traditional
              financing options, creating a persistent need for alternative
              funding sources and collaboration. With CLTConnect, CLTs gain a
              comprehensive toolkit to connect with local governments, banks,
              philanthropic organizations, and potential donors who share their
              vision for stable, affordable communities.
            </p>
            <p>
              The app streamlines access to scalable funding opportunities,
              helps CLTs showcase their long-term benefits, and facilitates
              transparent partnerships. By addressing the core funding issue,
              CLTConnect empowers CLTs to expand their reach, acquire more
              properties, and continue making an impact on housing affordability
              for generations.
            </p>
            <p className="font-semibold">
              Together, let's build a foundation for affordable homeownership
              and sustainable community growth.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 CLTConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
// import React from "react";

// function HomePage() {
//   return (
//     <div>
//       <div>
//         CLTConnect is a digital platform designed to tackle the critical funding
//         and sustainability challenges facing Community Land Trusts (CLTs) in
//         their mission to preserve affordable housing. CLTs play a transformative
//         role by enabling accessible homeownership and fostering long-term
//         community stability. However, their unique structure often limits access
//         to traditional financing options, creating a persistent need for
//         alternative funding sources and collaboration. With CLTConnect, CLTs
//         gain a comprehensive toolkit to connect with local governments, banks,
//         philanthropic organizations, and potential donors who share their vision
//         for stable, affordable communities. The app streamlines access to
//         scalable funding opportunities, helps CLTs showcase their long-term
//         benefits, and facilitates transparent partnerships. By addressing the
//         core funding issue, CLTConnect empowers CLTs to expand their reach,
//         acquire more properties, and continue making an impact on housing
//         affordability for generations. Together, let's build a foundation for
//         affordable homeownership and sustainable community growth.
//       </div>
//     </div>
//   );
// }

// export default HomePage;
