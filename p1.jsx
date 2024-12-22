<div>
  {/*homepage*/}
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
  <link rel="stylesheet" as="style" onload="this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%40400%3B500%3B700%3B800&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900" />
  <title>Galileo Design</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292929] px-10 py-3">
        <div className="flex items-center gap-4 text-[#FFFFFF]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_6_330"><rect width={48} height={48} fill="white" /></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">Health AI</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Services</a>
            <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Pricing</a>
            <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">About</a>
            <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Blog</a>
          </div>
          <div className="flex gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Sign Up</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#292929] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Log In</span>
            </button>
          </div>
        </div>
      </header>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/6d5861f4-1656-4b35-9b07-3a2875d02c65.png")'}}>
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Revolutionizing Healthcare with AI
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    We provide personalized health insights, doctor-reviewed reports, and a range of services to help you live your best life.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-4 py-10 @container">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Features
              </h1>
              <p className="text-[#FFFFFF] text-base font-normal leading-normal max-w-[720px]">
                We offer a range of features to help you manage your health, including AI anemia detection, generic medicine alternatives, and personalized diet recommendations.
                Our doctors review all reports before they're sent to you, so you can trust that the information you receive is accurate and reliable.
              </p>
            </div>
          </div>
          <div className="@container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Take a free anemia test
                </h1>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <a className="text-[#ABABAB] text-base font-normal leading-normal min-w-40" href="#">Terms of Use</a>
              <a className="text-[#ABABAB] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              <a className="text-[#ABABAB] text-base font-normal leading-normal min-w-40" href="#">Accessibility</a>
              <a className="text-[#ABABAB] text-base font-normal leading-normal min-w-40" href="#">Security</a>
            </div>
            <p className="text-[#ABABAB] text-base font-normal leading-normal">@2022 Health AI</p>
          </footer>
        </div>
      </footer>
    </div>
  </div>
  &nbsp;
</div>
