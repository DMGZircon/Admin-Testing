export const About = () => {
  return (
    <>
      <div className="about flex py-5 sm:py-0" id="about">
        <div className="section1 sm:w-1/2 sm:grid place-content-center px-5 hidden">
          <img src="/machine_learning.webp"
            className="w-[35rem] h-[35rem] object-contain rounded-3xl" alt="Machine Learning Image" />
        </div>
        <div className="section2 sm:w-1/2 flex flex-col gap-3 justify-center px-6 sm:pr-10">
          <h1 className="text-3xl font-bold">ABOUT</h1>
          <p className="text-xl font-semibold">Sentiment Analysis App</p>
          <p className="text-lg">Our sentiment analysis app makes it easy to gauge the emotional tone of any written text. Simply enter your text into the intuitive input field, and our advanced natural language processing algorithms will instantly detect positive and negative words, providing you with a clear happiness level meter and corresponding emotion emoji.

            Whether you're looking to analyze customer feedback, social media posts, or your own writing, our app puts the power of sentiment analysis at your fingertips. Powered by the trusted AFINN-165 lexicon and integrated with popular npm packages like "sentiment," our tool delivers accurate, real-time results you can trust.</p>
          <ul className="text-lg">
            <li className="flex gap-2">
              <svg viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check_All_Big">
                    {" "}
                    <path
                      id="Vector"
                      d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969"
                      stroke="#228b22"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>

              Supports both Tagalog and English text</li>
            <li className="flex gap-2">
              <svg viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check_All_Big">
                    {" "}
                    <path
                      id="Vector"
                      d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969"
                      stroke="#228b22"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>
              Instantly identifies positive and negative words</li>

              <li className="flex gap-2">
              <svg viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check_All_Big">
                    {" "}
                    <path
                      id="Vector"
                      d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969"
                      stroke="#228b22"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>
              Provides a corresponding emotion emoji for visual feedback</li>
              <li className="flex gap-2">
              <svg viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check_All_Big">
                    {" "}
                    <path
                      id="Vector"
                      d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969"
                      stroke="#228b22"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>
              Clean, mobile-responsive interface for easy use on-the-go</li>
              
          </ul>
        </div>

      </div>
    </>
  )
}

