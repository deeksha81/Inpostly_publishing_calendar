import React from "react";

const ScheduledPost = ({ content, platform, time, status }) => (
  <div className="grid grid-cols-6 items-center border-b border-[#D2B48C] py-3 text-white text-sm">
    <div className="col-span-2 break-words">{content}</div>
    <div className="text-[#A0522D]">{platform}</div>
    <div className="text-[#A0522D]">{time}</div>
    <div>
      <span className="bg-[#A0522D] text-white text-xs px-2 py-1 rounded">
        {status}
      </span>
    </div>
    <div className="flex space-x-2 text-[#A0522D] text-xs">
      <button className="hover:underline">Edit</button>
      <span className="font-bold">|</span>
      <button className="hover:underline">Delete</button>
    </div>
  </div>
);

function App() {
  const posts = [
    {
      content: "Excited to announce our new product launch! Check out the details on our website. #innovation #tech",
      platform: "Twitter",
      time: "May 15, 2024, 10:00 AM",
      status: "Scheduled",
    },
    {
      content: "Join our live Q&A session with our CEO tomorrow at 2 PM EST. #liveevent #askmeanything",
      platform: "Facebook",
      time: "May 16, 2024, 2:00 PM",
      status: "Scheduled",
    },
    {
      content: "Behind the scenes of our latest campaign shoot. Stay tuned for the big reveal! #bts #marketing",
      platform: "Instagram",
      time: "May 12, 2024, 4:00 PM",
      status: "Scheduled",
    },
  ];

  return (
    <div className="min-h-screen bg-[#381819] text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-[#3e2723]">
          <div className="border-8 border-blue-900 rounded-lg h-full flex flex-col justify-between p-4 mt-0">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
  <span className="text-xl font-bold text-white">Inpostly</span>
</div>

              <nav className="space-y-4 text-sm text-white text-center lg:text-left">
                <div>🏠 Home</div>
                <div>📥 Inbox</div>
                <div>📅 Calendar</div>
                <div className="bg-yellow-600 px-2 py-1 rounded text-black inline-block">📤 Publish</div>
                <div>📢 Ads</div>
                <div>📊 Analytics</div>
              </nav>
            </div>
            <div className="mt-8 space-y-4">
              <button className="w-full bg-yellow-400 text-black py-2 rounded">New Post</button>
              <div className="text-sm text-gray-300">⚙️ Settings</div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Publishing Calendar</h2>
          <p className="text-gray-400 text-sm mb-6 text-center sm:text-left">
            View and manage all your scheduled and published posts across different social media platforms.
          </p>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* May */}
            <div>
              <h3 className="text-lg mb-2">May 2024</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {[...Array(31)].map((_, i) => (
                  <div
                    key={i}
                    className={`py-1 ${
                      i === 10 ? "bg-yellow-500" : ""
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* June */}
            <div>
              <h3 className="text-lg mb-2">June 2024</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className={`py-1 ${
                      i === 10 ? "bg-yellow-500" : ""
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scheduled Posts */}
          <div className="mt-8">
            <h3 className="text-xl mb-2 font-bold">Scheduled Posts</h3>

            <div className="bg-[#3e2723] rounded border-2 border-[#5D4037] overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-6 items-center border-b border-gray-700 py-2 text-white text-sm font-semibold bg-[#A0522D] p-3 rounded-t">
                <div className="col-span-2">Post Content</div>
                <div>Platform</div>
                <div>Scheduled Time</div>
                <div>Status</div>
                <div>Actions</div>
              </div>

              {/* Rows */}
              <div className="space-y-3 mt-2">
                {posts.map((post, idx) => (
                  <ScheduledPost key={idx} {...post} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-gray-900 p-4 text-center text-sm text-gray-500">
        © 2025 Inpostly. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
