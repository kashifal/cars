import React from 'react';

const SupportContent = () => {
  return (
    <div>
        <div>
        <div className="h-96 w-full bg-[#7380FF] px-3 py-3">
          <img src="data:image/png;base64,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" className="w-44" alt="" />
        </div>
        <div className="-mt-52 h-full w-full px-2">
          <div className="z-50 mx-auto max-h-full max-w-[30rem] rounded bg-white p-4 py-14 shadow-2xl shadow-slate-200">
            <div data-test-id>
              <div className="flex flex-col items-center gap-4 px-3 text-start sm:px-9">
                {/* Header */}
                <h1 className="text-2xl font-semibold text-gray-800 sm:-ml-14">Vehicle Approval Help Centre</h1>
                {/* Help Section */}
                <div className="mt-2 space-y-2 text-center sm:-ml-24 sm:text-start">
                  <div className="text-lg font-medium text-gray-600">How can we help?</div>
                  <div className="text-gray-500">
                    <p>Search Vehicle Approval Centre Support</p>
                  </div>
                </div>
                <div className="mt-2 h-0 w-full border-0 border-gray-300">
                  <hr />
                </div>
                {/* Subheading */}
                <h2 className="mb-2 text-xl font-semibold sm:-ml-14">Enter your email to log in or sign up</h2>
                {/* Form */}
                <div className="w-full max-w-lg">
                  <form id="login-form" data-testid="login-form" className="flex flex-col space-y-4">
                    {/* Email Field */}
                    <div className="flex flex-col">
                      <label htmlFor="user-email" className="text-sm font-medium text-gray-700">Email address</label>
                      <input id="user-email" name="user-email" type="email" className="mt-1 rounded border border-gray-300 p-2 duration-300 focus: border-[#fd0223] focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder autoComplete="email" />
                    </div>
                    {/* Submit Button */}
                    <button id="login-button" type="submit" className="w-full rounded bg-[#fd0223] px-4 py-[0.4rem] text-white duration-300 hover:bg-[#fd0223] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-testid="login-button">Next</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-12 " id="portal-layout-footer">
          <a className="flex items-center space-x-2 text-gray-400 hover:text-[#fd0223]" target="_blank" rel="noopener noreferrer" href="https://www.atlassian.com/software/jira/service-desk/powered-by?utm_medium=jira-in-product&utm_source=jira_service_desk_portal_footer&utm_content=vehicleapprovalcentre">
            <span>Powered by</span>
            <img className="h-5 w-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIzOC4wNCUiIHkxPSI2LjY0JSIgeDI9IjU5Ljg2JSIgeTI9IjYzLjc4JSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiMzNDQ1NjMiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjNUU2Qzg0IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0tOS02aDMydjMySC05eiIvPjxnIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTguOTMgNy41Nmw1LjIuMDJhLjgxLjgxIDAgMCAxIC42NSAxLjNMNy4wOSAxOS4xNEE1LjQ2IDUuNDYgMCAwIDEgNiAxMS41bDIuOTQtMy45NHoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNNS45OCAxMS41bC01LjE3LS4wNGEuODEuODEgMCAwIDEtLjY1LTEuM0w3Ljc3IDBhNS40NiA1LjQ2IDAgMCAxIDEuMTEgNy42NGwtMi45IDMuODZ6IiBmaWxsPSIjNUU2Qzg0Ii8+PC9nPjwvZz48L3N2Zz4K" alt="Jira Logo" />
            <span>Jira Service Management</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default SupportContent;
