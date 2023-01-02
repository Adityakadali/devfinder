const Usercard = ({ userdata }) => {
  const joinedDate = new Date(userdata.created_at).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {userdata ? (
        <div className="mt-4 grid w-[60rem] grid-cols-5 gap-6 rounded-lg bg-slate-800 py-8 px-8 shadow-md">
          <div className="col-span-1">
            <div>
              <img
                src={userdata.avatar_url}
                alt={userdata.name}
                className="rounded-full object-cover shadow-sm ring-2 ring-slate-900/50"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{userdata.name}</h2>
              <p>Joined {joinedDate}</p>
            </div>
            <a href={userdata.html_url} className="mt-2 text-blue-500">
              @{userdata.login.toLowerCase()}
            </a>
            <p className="mt-4 text-slate-300">
              {userdata.bio ? userdata.bio : "This profile has no bio"}
            </p>

            <div className="mt-4 grid grid-cols-3 rounded-lg bg-slate-900 py-3 px-4">
              <p className="flex flex-col gap-2">
                Repos
                <span className="text-xl font-bold">
                  {userdata.public_repos}
                </span>
              </p>
              <p className="flex flex-col gap-2">
                Followers
                <span className="text-xl font-bold">{userdata.followers}</span>
              </p>
              <p className="flex flex-col gap-2">
                Following
                <span className="text-xl font-bold">{userdata.following}</span>
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2">
              <div className="flex flex-col gap-4">
                <div
                  className={`flex items-center gap-2 ${
                    userdata.location ? "text-slate-50" : "text-slate-300"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    {userdata.location ? userdata.location : "Not Available"}
                  </p>
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    userdata.blog ? "text-slate-50" : "text-slate-300"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                  </svg>

                  <p>
                    {userdata.blog ? (
                      <a href={userdata.blog}>{userdata.blog}</a>
                    ) : (
                      "Not Available"
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div
                  className={`flex items-center gap-2 ${
                    userdata.twitter_username
                      ? "text-slate-50"
                      : "text-slate-300"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                  </svg>

                  <p>
                    {userdata.twitter_username
                      ? userdata.twitter_username
                      : "Not Available"}
                  </p>
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    userdata.email ? "text-slate-50" : "text-slate-300"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                  </svg>
                  <p>
                    {userdata.email ? <p>{userdata.blog}</p> : "Not Available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4 grid w-[60rem]  rounded-lg bg-slate-800 py-8 px-8 shadow-md">
          <p>Find your developer details</p>
        </div>
      )}
    </>
  );
};

export default Usercard;
