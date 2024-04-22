import React from "react";
import login1 from "../../assets/images/login1.svg";
import { Link } from "react-router-dom";
import luckycharm from "../../assets/images/luckycharm.svg";
import facebooklogo from "../../assets/images/facebooklogo.svg";
import googlelogo from "../../assets/images/googlelogo.svg";
import bottomcircle from "../../assets/images/bottomcircle.svg";
import bgImg from "../../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <div
      className="flex justify-end items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative border w-2/5 rounded-xl overflow-hidden  mr-5 backdrop-blur-lg">
        <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
        <div className="flex flex-col justify-center items-center">
          <img src={login1} className="w-2/5 pt-4" alt="" />
          <p className="font-small text-[#380445] text-[1rem] pt-3 ">
            Welcome to InDiSupport
          </p>

          <div className="w-3/5 flex justify-between pt-6 uppercase font-medium">
            <Link className="font-medium  text-[#41788E] ">Login</Link>
            <Link
              className="text-[#F5F5F5] font-thin "
              onClick={() => goTo("/signup")}
            >
              Sign Up
            </Link>
          </div>
          <div className="w-8/12 pt-4">
            <div className=" border border-[#FFFFFF] rounded-full py-3 px-4 items-center overflow-hidden flex gap-3">
              <svg
                className="w-6"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.91669 13.6666C1.58335 13.6666 1.29169 13.5416 1.04169 13.2916C0.791687 13.0416 0.666687 12.75 0.666687 12.4166V1.58331C0.666687 1.24998 0.791687 0.958313 1.04169 0.708313C1.29169 0.458313 1.58335 0.333313 1.91669 0.333313H16.0834C16.4167 0.333313 16.7084 0.458313 16.9584 0.708313C17.2084 0.958313 17.3334 1.24998 17.3334 1.58331V12.4166C17.3334 12.75 17.2084 13.0416 16.9584 13.2916C16.7084 13.5416 16.4167 13.6666 16.0834 13.6666H1.91669ZM9.00002 7.37498L1.91669 2.72915V12.4166H16.0834V2.72915L9.00002 7.37498ZM9.00002 6.12498L16 1.58331H2.02085L9.00002 6.12498ZM1.91669 2.72915V1.58331V12.4166V2.72915Z"
                  fill="#FFFFFF"
                />
              </svg>
              <input
                type="text"
                placeholder="Email"
                className=" outline-none w-full bg-inherit font-thin text-[0.8rem] text-[#380445] "
              />
            </div>
          </div>
          <div className="w-8/12 pt-4">
            <div className=" border border-[#FFFFFF] rounded-full py-3 px-4 items-center overflow-hidden flex gap-3">
              <svg
                className="w-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7388 19.3745C16.5038 19.3745 17.1296 18.7496 17.1296 17.9846V10.0795C17.1285 9.71109 16.9816 9.35806 16.721 9.0976C16.4603 8.83713 16.1072 8.69045 15.7388 8.68958H4.26126C3.8928 8.69045 3.53967 8.83713 3.27905 9.0976C3.01844 9.35806 2.87152 9.71109 2.87042 10.0795V17.9846C2.87152 18.353 3.01844 18.7061 3.27905 18.9665C3.53967 19.227 3.8928 19.3737 4.26126 19.3745H15.7388ZM15.7388 18.7495H4.26126C4.16043 18.7507 4.06039 18.7318 3.967 18.6937C3.87361 18.6557 3.78875 18.5994 3.71742 18.5281C3.64608 18.4569 3.58969 18.3721 3.55157 18.2788C3.51345 18.1854 3.49436 18.0854 3.49542 17.9846V10.0795C3.49542 9.65038 3.83167 9.31458 4.26126 9.31458H15.7388C16.1683 9.31458 16.5046 9.64997 16.5046 10.0795V17.9846C16.5046 18.4142 16.1683 18.7495 15.7388 18.7495Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M9.77919 0.624573C9.74205 0.625437 9.70536 0.632906 9.67085 0.646647C7.05877 0.70748 4.95752 2.81748 4.95752 5.44248V8.80041C4.95752 8.88329 4.99044 8.96275 5.04905 9.02136C5.10765 9.07996 5.18714 9.11291 5.27002 9.11291C5.3529 9.11291 5.43239 9.07996 5.49099 9.02136C5.5496 8.96275 5.58252 8.88329 5.58252 8.80041V5.44248C5.58076 4.89104 5.68815 4.3447 5.8985 3.83495C6.10885 3.32519 6.41801 2.86211 6.80816 2.47239C7.19831 2.08267 7.66173 1.77401 8.17171 1.56421C8.6817 1.35441 9.22816 1.24761 9.7796 1.24998H10.2204C10.7719 1.24761 11.3183 1.35441 11.8283 1.56421C12.3383 1.77401 12.8017 2.08267 13.1919 2.47239C13.582 2.86211 13.8912 3.32519 14.1015 3.83495C14.3119 4.3447 14.4193 4.89104 14.4175 5.44248V8.90997C14.4175 8.99285 14.4504 9.07236 14.509 9.13097C14.5677 9.18957 14.6471 9.22247 14.73 9.22247C14.8129 9.22247 14.8924 9.18957 14.951 9.13097C15.0096 9.07236 15.0425 8.99285 15.0425 8.90997V5.44248C15.0425 2.77873 12.8863 0.624573 10.2204 0.624573H9.7796H9.77919ZM9.84794 1.84456C7.96044 1.84456 6.42835 3.36247 6.42835 5.23914V8.88581C6.42835 8.96869 6.46128 9.0482 6.51988 9.10681C6.57849 9.16541 6.65797 9.19831 6.74085 9.19831C6.82373 9.19831 6.90322 9.16541 6.96182 9.10681C7.02043 9.0482 7.05335 8.96869 7.05335 8.88581V5.23873C7.05335 3.70081 8.29252 2.46956 9.84794 2.46956H10.1521C11.7075 2.46956 12.9467 3.7008 12.9467 5.23914V8.90163C12.9467 8.98451 12.9796 9.06402 13.0382 9.12262C13.0968 9.18123 13.1763 9.21413 13.2592 9.21413C13.3421 9.21413 13.4216 9.18123 13.4802 9.12262C13.5388 9.06402 13.5717 8.98451 13.5717 8.90163V5.23914C13.5717 3.36247 12.04 1.84456 10.1521 1.84456H9.84794ZM10 11.4012C9.60569 11.4025 9.2279 11.5598 8.94906 11.8386C8.67023 12.1174 8.513 12.4952 8.51169 12.8896C8.51169 13.3521 8.75877 13.7537 9.1171 14.0329V15.78C9.1171 16.2637 9.51585 16.6641 10 16.6641C10.4842 16.6641 10.8834 16.2641 10.8834 15.78V14.032C11.2413 13.7529 11.4879 13.3516 11.4884 12.8896C11.487 12.4952 11.3298 12.1174 11.051 11.8386C10.7721 11.5598 10.3943 11.4025 10 11.4012ZM10 12.0262C10.4804 12.0262 10.8634 12.4091 10.8634 12.8896C10.8633 13.0434 10.822 13.1944 10.7439 13.3269C10.6658 13.4595 10.5537 13.5687 10.4192 13.6433C10.3704 13.6703 10.3296 13.7099 10.3013 13.758C10.2729 13.8061 10.258 13.8608 10.2579 13.9166V15.78C10.259 15.8142 10.2531 15.8483 10.2406 15.8801C10.228 15.912 10.2091 15.941 10.1849 15.9652C10.1608 15.9895 10.1319 16.0086 10.1001 16.0213C10.0683 16.034 10.0342 16.0401 10 16.0391C9.96576 16.0401 9.93165 16.0341 9.89981 16.0214C9.86797 16.0087 9.83906 15.9897 9.81486 15.9654C9.79066 15.9411 9.77169 15.9121 9.7591 15.8802C9.74652 15.8483 9.74059 15.8142 9.74169 15.78V13.9175C9.74178 13.8617 9.72691 13.8068 9.69863 13.7587C9.67034 13.7105 9.62967 13.6709 9.58085 13.6438C9.44626 13.5691 9.3341 13.4598 9.256 13.3272C9.1779 13.1946 9.1367 13.0435 9.13669 12.8896C9.13669 12.4087 9.5196 12.0262 10 12.0262Z"
                  fill="#FFFFFF"
                />
              </svg>
              <input
                type="text"
                placeholder="Password"
                className="  outline-none w-full bg-inherit font-thin text-[0.8rem]"
              />
            </div>
          </div>


          <div class="flex  p-5 gap-36  ">
            <div class="flex  ">
              <div class="flex justify-center items-center   h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-xs font-sm text-[#380445] dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              class="ms-auto text-xs text-[#F7A741] hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          
          <div class="text-sm font-thin text-[#F7A741] dark:text-gray-300 ">
            Not registered?{" "}
            <a
              href="#"
              class="text-sm t text-[#380445] hover:text-[#F7A741] dark:text-blue-500"
            >
              Create account
            </a>
          </div>


          <button
          type="submit"
            className="rounded-full bg-[#F7A741] w-4/12 flex justify-center my-7 text-[1rem] text-[#FFFFFF] py-3 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
            onClick={() => goTo("/requesterhome")}
          >
            Login
          </button>
          <div>
            <p className="text-[0.7rem] text-[#380445]">or login with</p>
          </div>
          <div className="flex justify-center items-center py-4 gap-5">
            <img src={facebooklogo} alt="" />
            <img src={googlelogo} alt="" />
          </div>
          <img src="" alt="" />
        </div>
        <img
          src={bottomcircle}
          className="overflow-hidden absolute bottom-0 left-0 rounded-bl-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
